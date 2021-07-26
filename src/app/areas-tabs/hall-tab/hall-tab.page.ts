import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { TableComponent } from 'src/app/shared/components/table/table.component';



@Component({
  selector: 'app-hall-tab',
  templateUrl: 'hall-tab.page.html',
  styleUrls: ['hall-tab.page.scss']

})
export class HallTabPage {

  @Input() table: TableComponent;

  constructor(private router: Router, private navCtrl: NavController, private authService: AuthService) { }

logout(){
  this.authService.logOut();
 // console.log("POZVAO IZ HALLA");
  this.router.navigateByUrl('/login');
}



}
