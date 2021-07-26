import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { finished } from 'node:stream';
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

  ngOnInit() {
    // Ovde treba da citas iz baze orderItemsArrah
    //  this.getAllOrders().subscribe(orders => this.orderItemsArray=orders); <- get
  }

  dismiss() {
    // const order: Order ={
    //     id: 3,
    //     status: OrderStatus.UNPAID ,
    //     creatingTime: new Date,
    //     finishingTime: null,
    //     waiterId: 3,
    //     tableId: 3
    //   }

    //   console.log(order,"ORDER NOVI");
    //   this.apiService.saveOrder( JSON.stringify(order));

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
    modal.onDidDismiss().then((data) => {
      const res = data.data?.res;
      if (res) {
        this.orderItemsArray.push(res);
        this.sum += res.amount;
      }
    });
    return await modal.present();
  }
}
