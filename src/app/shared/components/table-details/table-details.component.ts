import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.scss'],
})
export class TableDetailsComponent implements OnInit {
  public orderItemsArray = [
    {
      name: 'Coca-Cola',
      quantity: 2,
      price: 150,
      amount: 300,
    },
    {
      name: 'Fanta',
      quantity: 3,
      price: 130,
      amount: 390,
    },
  ];

  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss();
  }

  increaseQuantity(index) {
    this.orderItemsArray[index].quantity++;
    this.orderItemsArray[index].amount =
      this.orderItemsArray[index].quantity * this.orderItemsArray[index].price;
  }

  decreaseQuantity(index) {
    if (this.orderItemsArray[index].quantity === 1) {
      this.orderItemsArray.splice(index, 1);
      return;
    }
    this.orderItemsArray[index].quantity--;
    this.orderItemsArray[index].amount =
      this.orderItemsArray[index].quantity * this.orderItemsArray[index].price;
  }

  removeItem(index) {
    this.orderItemsArray.splice(index, 1);
  }

  async openMenu() {
    const modal = await this.modalController.create({
      component: MenuComponent,
      id: 'menu',
    });
    modal.onDidDismiss().then((data) => {
      const res = data.data.res;
      this.orderItemsArray.push(res);
    });
    return await modal.present();
  }
}
