import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AreasTabsPageRoutingModule } from './areas-tabs-routing.module';
import { AreasTabsPage } from './areas-tabs.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { HallTabPageModule } from './hall-tab/hall-tab.module';
import { GardenTabPageModule } from './garden-tab/garden-tab.module';
import { TerraceTabPageModule } from './terrace-tab/terrace-tab.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AreasTabsPageRoutingModule,
    SuperTabsModule,
    HallTabPageModule,
    GardenTabPageModule,
    TerraceTabPageModule

  ],
  declarations: [AreasTabsPage]
})
export class AreasTabsPageModule { }
