import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { ApiService } from 'src/app/services/api.service';
import { OrderStatus } from '../../enums/OrderStatus.enum';
import { Order } from '../../models/Order';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.scss'],
})
export class TableDetailsComponent implements OnInit {
  @Input() tableJsonNumber: number;
  @Input() tableActiveOrderId: any;
  order: Order;

  public orderItemsArray = [];

  public sum = 0;

  constructor(
    public modalController: ModalController,
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    if (this.tableActiveOrderId !== -1) {
      const res = await this.apiService.getOrderItems(this.tableActiveOrderId);
      console.log(res);

      for (const property in res) {
        const item = res[property];
        item.firebaseId = property;
        this.orderItemsArray.push(item);
        this.sum += res[property].amount;
      }
    }
  }

  dismiss() {
    this.modalController.dismiss();
  }

  async increaseQuantity(index) {
    this.orderItemsArray[index].quantity++;
    this.orderItemsArray[index].amount =
      this.orderItemsArray[index].quantity * this.orderItemsArray[index].price;
    this.sum += this.orderItemsArray[index].price;

    await this.apiService.changeOrderItemQuantity(
      this.orderItemsArray[index].firebaseId,
      this.tableActiveOrderId,
      this.orderItemsArray[index].quantity,
      this.orderItemsArray[index].amount
    );
  }

  async decreaseQuantity(index) {
    if (this.orderItemsArray[index].quantity === 1) {
      this.removeItem(index);
      return;
    }
    this.sum -= this.orderItemsArray[index].price;
    this.orderItemsArray[index].quantity--;
    this.orderItemsArray[index].amount =
      this.orderItemsArray[index].quantity * this.orderItemsArray[index].price;

    await this.apiService.changeOrderItemQuantity(
      this.orderItemsArray[index].firebaseId,
      this.tableActiveOrderId,
      this.orderItemsArray[index].quantity,
      this.orderItemsArray[index].amount
    );
  }

  async removeItem(index) {
    await this.apiService.removeOrderItem(
      this.orderItemsArray[index].firebaseId,
      this.tableActiveOrderId
    );
    if (this.orderItemsArray.length === 1) {
      await this.apiService.setActiveOrderId(this.tableJsonNumber, -1);
      await this.apiService.closeOrder(
        this.tableActiveOrderId,
        new Date(),
        OrderStatus.CANCELED
      );
    }
    this.sum -= this.orderItemsArray[index].amount;
    this.orderItemsArray.splice(index, 1);
  }

  async openMenu() {
    const modal = await this.modalController.create({
      component: MenuComponent,
      id: 'menu',
    });
    modal.onDidDismiss().then(async (data) => {
      const res = data.data?.res;
      if (res) {
        if (this.tableActiveOrderId === -1) {
          const loggedUser = await this.authService.getLoggedUser();
          this.order = {
            status: OrderStatus.UNPAID,
            creatingTime: new Date(),
            finishingTime: null,
            waiterId: loggedUser.localId,
            tableId: this.tableJsonNumber,
          };
          const resOrder = await this.apiService.saveOrder(this.order);
          this.tableActiveOrderId = resOrder.name;
          await this.apiService.setActiveOrderId(
            this.tableJsonNumber,
            this.tableActiveOrderId
          );
        }
        this.sum += res.amount;
        const res2 = await this.apiService.saveOrderItem(
          res,
          this.tableActiveOrderId
        );
        res.firebaseId = res2.name;
        this.orderItemsArray.push(res);
      }
    });
    return await modal.present();
  }
}
