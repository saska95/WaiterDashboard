import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AreasTabsPageRoutingModule } from './areas-tabs-routing.module';

import { AreasTabsPage } from './areas-tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AreasTabsPageRoutingModule
  ],
  declarations: [AreasTabsPage]
})
export class AreasTabsPageModule {}
