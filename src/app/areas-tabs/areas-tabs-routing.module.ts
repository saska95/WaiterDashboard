import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreasTabsPage } from './areas-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: AreasTabsPage,
    children: [
      {
        path: 'hall-tab',
        loadChildren: () => import('./hall-tab/hall-tab.module').then(m => m.HallTabPageModule)
      },
      {
        path: 'terrace-tab',
        loadChildren: () => import('./terrace-tab/terrace-tab.module').then(m => m.TerraceTabPageModule)
      },
      {
        path: 'garden-tab',
        loadChildren: () => import('./garden-tab/garden-tab.module').then(m => m.GardenTabPageModule)
      },
      {
        path: '',
        redirectTo: '/areas-tabs/hall-tab',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AreasTabsPageRoutingModule {}
