import { Component, OnInit } from '@angular/core';
import {  FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
	Name = new FormControl('');
	 Password = new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(15)]   );
open(){
console.log(this.Name.value);
console.log(this.Password.value);
}
   
  constructor() { }

  ngOnInit(): void {
  }

}
