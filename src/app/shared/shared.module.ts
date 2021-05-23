import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TableComponent } from './components/table/table.component';
import { CommonModule } from '@angular/common';
import { TableDetailsComponent } from './components/table-details/table-details.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './components/menu/menu.component';
import { CategoryMenuComponent } from './components/menu/category-menu/category-menu.component';

@NgModule({
  declarations: [
    TableComponent,
    TableDetailsComponent,
    MenuComponent,
    CategoryMenuComponent,
  ],
  exports: [
    TableComponent,
    TableDetailsComponent,
    MenuComponent,
    CategoryMenuComponent,
  ],
  imports: [CommonModule, IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
