import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AreasTabsPageRoutingModule } from './areas-tabs-routing.module';
import { AreasTabsPage } from './areas-tabs.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AreasTabsPageRoutingModule,
    SuperTabsModule

  ],
  declarations: [AreasTabsPage]
})
export class AreasTabsPageModule { }
