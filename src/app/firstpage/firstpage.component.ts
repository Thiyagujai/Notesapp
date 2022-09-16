import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.scss']
})
export class FirstpageComponent implements OnInit {
fap = faPlus;
fist:boolean=false;
creno:boolean=false;


adno(){
this.fist = true;
this.creno=false;
}

navnote(){
this.creno=true;
this.fist = false;
console.log("thi");
}
  constructor() { }

  ngOnInit(): void {
  }

}
