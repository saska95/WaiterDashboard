import { Component, Input } from '@angular/core';
import { TableComponent } from 'src/app/shared/components/table/table.component';



@Component({
  selector: 'app-hall-tab',
  templateUrl: 'hall-tab.page.html',
  styleUrls: ['hall-tab.page.scss']

})
export class HallTabPage {

  @Input() table: TableComponent;

  constructor() { }



}
