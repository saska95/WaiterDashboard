import { Component } from '@angular/core';
import { GardenTabPage } from './garden-tab/garden-tab.page';
import { HallTabPage } from './hall-tab/hall-tab.page';
import { TerraceTabPage } from './terrace-tab/terrace-tab.page';

@Component({
  selector: 'app-areas-tabs',
  templateUrl: 'areas-tabs.page.html',
  styleUrls: ['areas-tabs.page.scss'],
})
export class AreasTabsPage {
  hallTabPage = HallTabPage;
  terraceTabPage = TerraceTabPage;
  gardenTabPage = GardenTabPage;

  constructor() {}
}
