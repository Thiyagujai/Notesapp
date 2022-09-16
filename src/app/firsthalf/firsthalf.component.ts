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
@Input() newinput:any;
@Input() fresh:any;

displayform:boolean=true;
viewNotes:boolean=false;

fap = faPlus;
texts:any=[];
saved:any

disf(){
this.displayform=false;
console.log("jai");
}

savedform (){
this.saved= new FormGroup ({
        tit:new FormControl(''),
        ca:new FormControl(''),
        txt:new FormControl(''),
})
};

save(){
this.texts.push(this.saved.value);
console.log(this.texts);
}

ngOnInit(): void {
 this.savedform();
  }



}
