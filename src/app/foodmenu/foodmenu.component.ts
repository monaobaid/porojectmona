import { Component, OnInit } from '@angular/core';
import {ListFoodService} from '../../app/list-food.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-foodmenu',
  templateUrl: './foodmenu.component.html',
  styles: []
})
export class FoodmenuComponent implements OnInit {

  listFood=this.listF.list
  constructor(private listF:ListFoodService,private router:Router) { }

  ngOnInit() {
  }
  onclick(menu)
  {
   this.router.navigate(['/foodMenu', menu.id]);

  }
}
