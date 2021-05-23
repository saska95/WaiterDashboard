import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss'],
})
export class CategoryMenuComponent implements OnInit {
  @Input() item;
  @Input() products = [];
  selectedIndex: number = undefined;
  quantity: any = 0;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss();
  }

  selectItem(index) {
    this.selectedIndex = index;
  }

  setQuantity(quantity) {
    this.quantity = quantity.data;
  }

  add() {
    if (this.selectedIndex !== undefined && this.quantity > 0) {
      this.modalController.dismiss({
        ...this.products[this.selectedIndex],
        quantity: this.quantity,
        amount: this.quantity * this.products[this.selectedIndex].price,
      });
    }
  }
}
