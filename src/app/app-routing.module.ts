import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodmenuComponent } from './foodmenu/foodmenu.component';
import { MenudetailComponent } from './menudetail/menudetail.component';

const routes: Routes = [
  {path:'', redirectTo:'/foodMenu' , pathMatch:'full'},
  
  {path:'foodMenu',component:FoodmenuComponent},
{path:'foodMenu/:id',component:MenudetailComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[FoodmenuComponent,MenudetailComponent]
