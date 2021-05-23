import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GardenTabPage } from './garden-tab.page';
import { GardenTabPageRoutingModule } from './garden-tab-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    GardenTabPageRoutingModule,
    SharedModule
  ],
  declarations: [GardenTabPage]
})
export class GardenTabPageModule {}
