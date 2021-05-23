import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {TableComponent} from './components/table/table.component';
import { CommonModule } from '@angular/common';
import { TableDetailsComponent } from './components/table-details/table-details.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
declarations:[TableComponent, TableDetailsComponent],
exports: [TableComponent, TableDetailsComponent],
imports: [ CommonModule, IonicModule ],
schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class SharedModule{}
