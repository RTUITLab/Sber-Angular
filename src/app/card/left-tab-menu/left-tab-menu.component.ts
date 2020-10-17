import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-left-tab-menu',
  templateUrl: './left-tab-menu.component.html',
  styleUrls: ['./left-tab-menu.component.css']
})
export class LeftTabMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){

  }
  

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

}
