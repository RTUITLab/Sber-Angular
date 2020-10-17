import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
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

  getDate(module: Module): string {
    const t = moment(module.lastEditTime);
    t.lang("ru");
    return t.startOf('day').fromNow();
  }

  async ngOnInit(): Promise<void> {
    this.modules = await this.modulesService.apiModulesGet$Json().toPromise();
    
  }

}
