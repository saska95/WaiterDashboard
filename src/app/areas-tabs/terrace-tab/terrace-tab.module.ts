import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TerraceTabPage } from './terrace-tab.page';
import { TerraceTabPageRoutingModule } from './terrace-tab-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TerraceTabPageRoutingModule,
    SharedModule
  ],
  declarations: [TerraceTabPage],
  entryComponents: [TerraceTabPage]

})
export class TerraceTabPageModule { }
