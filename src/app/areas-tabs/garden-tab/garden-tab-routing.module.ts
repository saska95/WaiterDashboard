import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GardenTabPage } from './garden-tab.page';

const routes: Routes = [
  {
    path: '',
    component: GardenTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GardenTabPageRoutingModule {}
