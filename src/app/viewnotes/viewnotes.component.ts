import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-viewnotes',
  templateUrl: './viewnotes.component.html',
  styleUrls: ['./viewnotes.component.scss']
})
export class ViewnotesComponent implements OnInit {
@Input() formValue:any;
  constructor() { }
  title:any;
  description:any;
  ngOnInit(): void {
  console.log(this.formValue)
  this.title = this.formValue.map((v:any)=>{
  		return v;
  })
  this.description = this.formValue.map((v:any)=>{
  	return v.txt;
  })
  }

}
