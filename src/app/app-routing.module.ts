import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OpenCloseComponent } from './open-close/open-close.component';


const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path :"home", component:HomeComponent },
  {path: "about", component:AboutComponent},
  {path: "open-close", component:OpenCloseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [HomeComponent, AboutComponent, OpenCloseComponent];