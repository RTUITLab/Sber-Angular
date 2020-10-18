import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.css']
})
export class SecondStepComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  id: string;

  async ngOnInit(): Promise<void> {
      this.id = this.route.snapshot.paramMap.get('id');

      
  }
}
