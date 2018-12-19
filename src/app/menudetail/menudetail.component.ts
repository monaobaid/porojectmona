import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-menudetail',
  template: '<h2>You selected menu with id ={{ id }}</h2>',
  styleUrls: ['./menudetail.component.css']
})

export class MenudetailComponent implements OnInit {
  public id;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.id= parseInt(this.route.snapshot.paramMap.get('id'));
    
  }

}
