import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {HallTabPage } from './hall-tab.page';
import {HallTabPageRoutingModule } from './hall-tab-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
   HallTabPageRoutingModule,
   SharedModule

  ],
  declarations: [HallTabPage]
})
export class HallTabPageModule {}
