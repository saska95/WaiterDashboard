import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { ProductCategory } from '../../enums/PorductCategory.enum';
import { CategoryMenuComponent } from './category-menu/category-menu.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  productCategoryArray = [];
  thisModal: any;

  products = [];
  constructor(
    private modalController: ModalController,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.thisModal = this.modalController.getTop();
    Object.keys(ProductCategory).forEach((item) => {
      const label = this.titleCase(item.replace('_', ' '));
      this.productCategoryArray.push({ label, category: item });
    });
    this.apiService.getDrinks().subscribe((drinks) => {
      this.products = drinks;
    });
  }

  titleCase(text: string) {
    return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
  }

  dismiss() {
    this.modalController.dismiss();
  }

  async clickOnMenuItem(item) {
    const modal = await this.modalController.create({
      component: CategoryMenuComponent,
      componentProps: {
        item,
        products: this.getProductsForCategory(item.category),
      },
    });
    modal.onWillDismiss().then(async (data) => {
      const res = data.data;
      this.modalController.dismiss({ res }, undefined, 'menu');
    });
    return await modal.present();
  }

  getProductsForCategory(category) {
    return this.products.filter((item) => {
      if (item.category === category) {
        return true;
      }
    });
  }
}
