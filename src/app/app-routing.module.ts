import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { FirstpageComponent }from './firstpage/firstpage.component';
const routes: Routes = [
	
        { path:'', redirectTo: 'homepage',pathMatch:'full'},
	{ path: 'homepage', component:HomepageComponent },
	{ path: 'firstpage', component:FirstpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
