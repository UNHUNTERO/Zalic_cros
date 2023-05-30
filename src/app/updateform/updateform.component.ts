import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Catalog } from '../myform/class/catalog';
import { ValidatorDateService } from '../myform/Service/validator.servise';
import { ValidatorDayDateService } from '../myform/Service/validator-day-date.service'; 

@Component({
   selector: 'app-updateform',
   templateUrl: './updateform.component.html',
   styleUrls: ['./updateform.component.scss'],
})
export class UpdateformComponent implements OnInit {

   @Input() catalog!: Catalog;
   @Input() show: boolean = true;
   @Output() catalogChange: EventEmitter<Catalog> = new EventEmitter<Catalog>();
   @Output() showChange = new EventEmitter();
   constructor() { }
   validate_date(c: string): boolean {
      let validator = new ValidatorDateService();
      if (c)
         if (!validator.validate_date(c)) return false; else return true;
      else return true;
   }
   save(n: any,id:any ,rd: any,pg:any) {
      this.show = false;
      if (this.validate_date(rd)) {
         let valid = new ValidatorDayDateService();
         if((rd) && !valid.validate_diff_date(rd,"30.05.2023"))
         throw Error ("Wrong Date")
      }
      else throw Error("Date is wrong");
      this.catalog = new Catalog(n, id, rd, pg, this.catalog.articles);
      this.catalogChange.emit(this.catalog);
      this.showChange.emit(this.show);
   }


   ngOnInit() { }

}