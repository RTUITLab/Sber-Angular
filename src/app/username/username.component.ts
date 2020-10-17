import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  constructor() { }

  public saveUsername(userName: string) {
    localStorage.setItem('userName', userName);
    this.username = localStorage.getItem('userName');
  }
  public username: string;
  ngOnInit(): void {
    this.username = localStorage.getItem('userName');
  }

}
