import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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
  products = [
    {
      name: 'Coca-Cola',
      price: 150,
      category: ProductCategory.SOFT_DRINKS,
    },
    {
      name: 'Fanta',
      price: 130,
      category: ProductCategory.SOFT_DRINKS,
    },
    {
      name: 'Juice',
      price: 250,
      category: ProductCategory.SOFT_DRINKS,
    },
    {
      name: 'Sprite',
      price: 130,
      category: ProductCategory.SOFT_DRINKS,
    },
    {
      name: 'Jelen',
      price: 150,
      category: ProductCategory.BEERS,
    },
    {
      name: 'Lav',
      price: 130,
      category: ProductCategory.BEERS,
    },
    {
      name: 'Staropramen',
      price: 250,
      category: ProductCategory.BEERS,
    },
    {
      name: 'Nektar',
      price: 130,
      category: ProductCategory.BEERS,
    },
    {
      name: 'White Lady',
      price: 150,
      category: ProductCategory.COCTAILS,
    },
    {
      name: 'El Diablo',
      price: 130,
      category: ProductCategory.COCTAILS,
    },

    {
      name: 'Rum',
      price: 150,
      category: ProductCategory.SPIRITS,
    },
    {
      name: 'Gin',
      price: 130,
      category: ProductCategory.SPIRITS,
    },
    {
      name: 'Balantines',
      price: 150,
      category: ProductCategory.SPIRITS,
    },
    {
      name: 'Vodka',
      price: 130,
      category: ProductCategory.SPIRITS,
    },
    {
      name: 'Esspreso',
      price: 150,
      category: ProductCategory.HOT_DRINKS,
    },
    {
      name: 'Tea',
      price: 130,
      category: ProductCategory.HOT_DRINKS,
    },
    {
      name: 'Vranac',
      price: 150,
      category: ProductCategory.WINE,
    },
    {
      name: 'Medvedja krv',
      price: 130,
      category: ProductCategory.WINE,
    },
  ];

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    this.thisModal = this.modalController.getTop();
    Object.keys(ProductCategory).forEach((item) => {
      const label = this.titleCase(item.replace('_', ' '));
      this.productCategoryArray.push({ label, category: item });
    });
  }

  titleCase(string: string) {
    return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();
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
