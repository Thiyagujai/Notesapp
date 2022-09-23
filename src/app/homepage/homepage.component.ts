import { Component, OnInit } from '@angular/core';
import {  FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
	Name = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(15)]  );
	 Password = new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(15)]   );
formgr:any;

	 open(){
console.log(this.Name.value);
console.log(this.Password.value);
}
 
/**profiles:any=[
	
	{ email:'thiyagu@abc.com', password:'12345' },
	{ email:'jai@abc.com', password:'54321' },
	];
data:any;**/

  constructor() { }

  ngOnInit(): void {
  }

}
