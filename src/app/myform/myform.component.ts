import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';
import { FormGroup,FormControl,FormArray,FormBuilder, Validators } from '@angular/forms';
import { Catalog } from './class/catalog';
import { dateValidator } from './Service/dateValidators';
import { ValidatorDayDateService } from './Service/validator-day-date.service';
import { AlertController } from '@ionic/angular';
import { InsquareService } from './Service/insquare.service';

@Component({
  selector: 'app-myform',
  templateUrl:'./myform.component.html',
  styleUrls: ['./myform.component.scss'],
})
export class MyformComponent  implements OnInit {
  res!:string;
  



InSquare(n : any){
  
  let check = new InsquareService();
  let num = check.checkNumberInSquare(+n)
  console.log(num ? 'належить' : 'не належить');
  this.res = num ? 'належить' : 'не належить';
}
ngOnInit() {}
  

}
