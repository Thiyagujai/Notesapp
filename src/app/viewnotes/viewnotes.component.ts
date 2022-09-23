import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-viewnotes',
  templateUrl: './viewnotes.component.html',
  styleUrls: ['./viewnotes.component.scss']
})
export class ViewnotesComponent implements OnInit {

@Input() noteValue:any;
constructor() { }
  
  displayingdata:any;



  ngOnInit(): void {
  
this.displayingdata= this.noteValue.map((v:any)=>{
  		return v;
  })



  }

}
