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
      name: 'Coca Cola',
      price: 160,
      category: ProductCategory.SOFT_DRINKS,
    },
    {
      name: 'Coca Cola Zero',
      price: 160,
      category: ProductCategory.SOFT_DRINKS,
    },
    {
      name: 'Schweppes Tonic',
      price: 160,
      category: ProductCategory.SOFT_DRINKS,
    },
    {
      name: 'Schweppes Bitter',
      price: 160,
      category: ProductCategory.SOFT_DRINKS,
    },
    {
      name: 'Fanta',
      price: 160,
      category: ProductCategory.SOFT_DRINKS,
    },
    {
      name: 'Sprite',
      price: 160,
      category: ProductCategory.SOFT_DRINKS,
    },
    {
      name: 'Juice',
      price: 140,
      category: ProductCategory.SOFT_DRINKS,
    },
    {
      name: 'IceTea',
      price: 140,
      category: ProductCategory.SOFT_DRINKS,
    },
    {
      name: 'Apple juice',
      price: 140,
      category: ProductCategory.SOFT_DRINKS,
    },
    {
      name: 'Lemonade',
      price: 240,
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
      name: 'Becks',
      price: 150,
      category: ProductCategory.BEERS,
    },
    {
      name: 'Corona',
      price: 130,
      category: ProductCategory.BEERS,
    },
    {
      name: 'Stella Artois',
      price: 250,
      category: ProductCategory.BEERS,
    },
    {
      name: 'Hoegaarden',
      price: 130,
      category: ProductCategory.BEERS,
    },
    {
      name: 'Bavaria',
      price: 250,
      category: ProductCategory.BEERS,
    },
    {
      name: 'Krusovice',
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
      name: 'Blue Frog',
      price: 150,
      category: ProductCategory.COCTAILS,
    },
    {
      name: 'Red Frog',
      price: 130,
      category: ProductCategory.COCTAILS,
    },
    {
      name: 'Tequila Sunrise',
      price: 150,
      category: ProductCategory.COCTAILS,
    },
    {
      name: 'Cuba Libre',
      price: 130,
      category: ProductCategory.COCTAILS,
    },
    {
      name: 'Long Island',
      price: 150,
      category: ProductCategory.COCTAILS,
    },
    {
      name: 'Mojito',
      price: 130,
      category: ProductCategory.COCTAILS,
    },
    {
      name: 'Cosmopolitan',
      price: 150,
      category: ProductCategory.COCTAILS,
    },
    {
      name: 'Blue lagoon',
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
      name: 'Smirnof vodka',
      price: 130,
      category: ProductCategory.SPIRITS,
    }, {
      name: 'Jonnie Walker',
      price: 150,
      category: ProductCategory.SPIRITS,
    },
    {
      name: 'Tequila',
      price: 130,
      category: ProductCategory.SPIRITS,
    },
    {
      name: 'Martini',
      price: 150,
      category: ProductCategory.SPIRITS,
    },
    {
      name: 'Campari',
      price: 130,
      category: ProductCategory.SPIRITS,
    },
    {
      name: 'Esspreso',
      price: 150,
      category: ProductCategory.HOT_DRINKS,
    },
    {
      name: 'Jegermeister',
      price: 150,
      category: ProductCategory.SPIRITS,
    },
    {
      name: 'Chivas regal',
      price: 130,
      category: ProductCategory.SPIRITS,
    },
    {
      name: 'Esspreso',
      price: 130,
      category: ProductCategory.HOT_DRINKS,
    },
    {
      name: 'Americano',
      price: 130,
      category: ProductCategory.HOT_DRINKS,
    },
    {
      name: 'Cappuccino',
      price: 130,
      category: ProductCategory.HOT_DRINKS,
    },
    {
      name: 'Latte',
      price: 130,
      category: ProductCategory.HOT_DRINKS,
    },
    {
      name: 'Cafe Mocha',
      price: 130,
      category: ProductCategory.HOT_DRINKS,
    },
    {
      name: 'Macchiato',
      price: 130,
      category: ProductCategory.HOT_DRINKS,
    },
    {
      name: 'Hot Chocolate',
      price: 130,
      category: ProductCategory.HOT_DRINKS,
    },
    {
      name: 'Irish coffee',
      price: 130,
      category: ProductCategory.HOT_DRINKS,
    },
    {
      name: 'Monin Ice coffee',
      price: 130,
      category: ProductCategory.HOT_DRINKS,
    },
    {
      name: 'Tea',
      price: 130,
      category: ProductCategory.HOT_DRINKS,
    },
    {
      name: 'Vranac',
      price: 290,
      category: ProductCategory.WINE,
    },
    {
      name: 'Rose',
      price: 290,
      category: ProductCategory.WINE,
    },
    {
      name: 'Sangria',
      price: 250,
      category: ProductCategory.WINE,
    },
    {
      name: 'Cabernet',
      price: 130,
      category: ProductCategory.WINE,
    }, {
      name: 'Merlot',
      price: 540,
      category: ProductCategory.WINE,
    },
    {
      name: 'Dom Perignon',
      price: 540,
      category: ProductCategory.WINE,
    },
    {
      name: 'Prosseco',
      price: 310,
      category: ProductCategory.WINE,
    },
    {
      name: 'Sauvignon',
      price: 130,
      category: ProductCategory.WINE,
    },
    {
      name: 'Chardonnay',
      price: 130,
      category: ProductCategory.WINE,
    }, {
      name: 'Pinot Grigio',
      price: 130,
      category: ProductCategory.WINE,
    }
  ];

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.thisModal = this.modalController.getTop();
    Object.keys(ProductCategory).forEach((item) => {
      const label = this.titleCase(item.replace('_', ' '));
      this.productCategoryArray.push({ label, category: item });
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
