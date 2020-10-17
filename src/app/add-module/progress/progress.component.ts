import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  public activeStatus = 1;

  constructor() { }

  ngOnInit(): void {
  }

  public isActiveStatus(status: number): boolean {
    return this.activeStatus === status || status === 7;
  }
}
