import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TableDetailsComponent } from '../table-details/table-details.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

  @Input() size: number;

  numbers: number[];

  constructor(public modalController: ModalController) {


   }

  ngOnInit() {
    if(!this.size || (this.size!==2 && this.size!==3 && this.size!==4)){
      this.size=4;
    }
    console.log(this.size);
    this.numbers = Array(this.size).fill(0).map((x,i)=>i);
    console.log(this.numbers);

  }

  async openTableDetails(){
    const modal = await this.modalController.create({
      component: TableDetailsComponent
    });
    return await modal.present();

  }

}
