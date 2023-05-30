import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';
import { FormGroup,FormControl,FormArray,FormBuilder, Validators } from '@angular/forms';
import { Catalog } from './class/catalog';
import { dateValidator } from './Service/dateValidators';
import { ValidatorDayDateService } from './Service/validator-day-date.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-myform',
  templateUrl:'./myform.component.html',
  styleUrls: ['./myform.component.scss'],
})
export class MyformComponent  implements OnInit {

  catalogForm!:FormGroup;
  catalog!: Catalog;

  datePattern = "^[0-9]{2}[.-/][0-9]{2}[.-/][0-9]{4}$";
  @Output() catalogAdd: EventEmitter<Catalog> = new EventEmitter<Catalog>();
  constructor(private fb:FormBuilder ,private alertController:AlertController) {
    this.catalogForm = this.fb.group({
      npap_name: ['',[]],
      npap_id:[''],
      npap_rdate: [' ',[Validators.pattern(this.datePattern)]],
      npap_pg: [' '],
      articles: new FormArray([new FormControl]),
    });
   }
   addNpap() {
    console.log("Add");
    (this.catalogForm.controls['articles'] as FormArray).push(
       new FormControl()
    )
 }

 deleteNpap(i: any) {
    console.log("Delete");
    (this.catalogForm.controls['articles'] as FormArray).removeAt(i)
 }
 getControls(){ return (this.catalogForm.get('articles')as FormArray).controls;}

 onSubmit(){
  let name = this.catalogForm.value.npap_name;
  let id = this.catalogForm.value.npap_id;
  let rd = this.catalogForm.value.npap_rdate;
  let pg = this.catalogForm.value.npap_pg;
  let articles = this.catalogForm.value.articles;
  let valid = new ValidatorDayDateService();
  if(valid.validate_diff_date(rd,"30.05.2023")){
    this.catalog = new Catalog(name,id,rd,pg,articles);
    console.log("Submit");
    this.catalogAdd.emit(this.catalog);
  }else
    this.presentAlert("")
}
ngOnInit() {}
async presentAlert(message: string) {
  const alert = await this.alertController.create({
     header: 'Помилка',
     subHeader: '',
     message: message,
     buttons: ['OK'],
  });

  await alert.present();
}
  

}
