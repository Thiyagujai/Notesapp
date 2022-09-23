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
fapl = faPlus;
card:boolean=false;
creno:boolean=false;

savednotes(){
this.card = true;
this.creno=false;
}

create(){
this.card = false;
this.creno=true;
}
  constructor() { }

  ngOnInit(): void {
  }

}
