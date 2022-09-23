import { Component, OnInit, Input } from '@angular/core';
import{ ViewChild, ElementRef } from'@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-firsthalf',
  templateUrl: './firsthalf.component.html',
  styleUrls: ['./firsthalf.component.scss']
})
export class FirsthalfComponent implements OnInit {
@Input() cardclick:any;
@Input() creatingnotes:any;


displayform:boolean=true;
viewNotes:boolean=false;

fapl = faPlus;
data:any=[];
saved:any

disf(){
this.displayform=false;
}

savedform (){
this.saved= new FormGroup ({
        title:new FormControl(''),
        description:new FormControl(''),

})
};

save(){
this.data.push(this.saved.value);
console.log(this.data);
this.saved.reset();
}

ngOnInit(): void {
 this.savedform();
  }



}
