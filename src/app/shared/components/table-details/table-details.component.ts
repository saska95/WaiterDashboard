import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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
  order: Order = {
    status: OrderStatus.UNPAID,
    creatingTime: new Date(1995, 5, 6),
    finishingTime: new Date(2023, 5, 6),
    waiterId: 3,
    tableId: 3,
  };

  //GET
  public orderItemsArray = [
    // {
    //   name: 'Coca-Cola',
    //   quantity: 2,
    //   price: 150,
    //   amount: 300,
    // },
    // {
    //   name: 'Fanta',
    //   quantity: 3,
    //   price: 130,
    //   amount: 390,
    // },
  ];

  public sum = 0;

  constructor(
    public modalController: ModalController,
    private apiService: ApiService
  ) {}

  async ngOnInit() {
    if (this.tableActiveOrderId !== -1) {
      const res = await this.apiService.getOrderItems(this.tableActiveOrderId);
      console.log(res);
      for (const property in res) {
        console.log(res[property]);
        this.orderItemsArray.push(res[property]);
        this.sum += res[property].amount;
      }
    }
    // this.orderItemsArray =
  }

  dismiss() {
    this.modalController.dismiss();
  }

  increaseQuantity(index) {
    this.orderItemsArray[index].quantity++;
    this.orderItemsArray[index].amount =
      this.orderItemsArray[index].quantity * this.orderItemsArray[index].price;
    this.sum += this.orderItemsArray[index].price;
  }

  decreaseQuantity(index) {
    this.sum -= this.orderItemsArray[index].price;
    if (this.orderItemsArray[index].quantity === 1) {
      this.orderItemsArray.splice(index, 1);
      return;
    }
    this.orderItemsArray[index].quantity--;
    this.orderItemsArray[index].amount =
      this.orderItemsArray[index].quantity * this.orderItemsArray[index].price;
  }

  removeItem(index) {
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
          const resOrder = await this.apiService.saveOrder(this.order);
          this.tableActiveOrderId = resOrder.name;
          await this.apiService.setActiveOrderId(
            this.tableJsonNumber,
            this.tableActiveOrderId
          );
        }
        // res.orderId = this.tableActiveOrderId;
        console.log(this.orderItemsArray);

        this.orderItemsArray.push(res);
        this.sum += res.amount;
        // moze se poboljsati da ne budu da elementa ako su ista nego da se kolicina poveca
        await this.apiService.saveOrderItem(res, this.tableActiveOrderId);
      }
    });
    return await modal.present();
  }
}
