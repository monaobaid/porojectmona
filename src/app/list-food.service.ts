import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListFoodService {
  list=[{name:'Breakfast' ,id:1} ,
  {name:'Lunch',id:2},
  {name:'Dinner',id:3}]
  constructor() { }
}
