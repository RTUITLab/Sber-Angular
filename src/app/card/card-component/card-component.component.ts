import { Component, OnInit, ViewChild } from '@angular/core';
import { Module } from 'src/api/models';
import { ModulesService } from 'src/api/services';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {
  constructor(private modulesService: ModulesService) { }

  public modules: Module[] = [];

  onClick() {
   
  }

  async ngOnInit(): Promise<void> {
    this.modules = await this.modulesService.apiModulesGet$Json().toPromise();

  }

}
