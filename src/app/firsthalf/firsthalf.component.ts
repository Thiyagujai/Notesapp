import { Component, OnInit, Input } from '@angular/core';
import{ ViewChild, ElementRef } from'@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-firsthalf',
  templateUrl: './firsthalf.component.html',
  styleUrls: ['./firsthalf.component.scss']
})
export class FirsthalfComponent implements OnInit {
@Input() newinput:any;
texts:any=[];
car:any
saved:any

  ngOnInit(): void {
 this.savedform();
  }




savedform (){
this.saved= new FormGroup ({
        tit:new FormControl(''),
        txt:new FormControl(''),
})
};

save(){
this.texts.push(this.saved.value);
 console.log(this.texts);

}


}
