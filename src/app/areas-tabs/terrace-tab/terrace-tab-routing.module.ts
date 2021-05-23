import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerraceTabPage } from './terrace-tab.page';

const routes: Routes = [
  {
    path: '',
    component: TerraceTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerraceTabPageRoutingModule {}
