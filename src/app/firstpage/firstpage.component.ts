import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.scss']
})
export class FirstpageComponent implements OnInit {

fist:boolean=true;

adno(){
this.fist = !this.fist;
}
  constructor() { }

  ngOnInit(): void {

  }

}
