import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ModuleResponse } from 'src/api/models';
import { ModulesService } from 'src/api/services';


@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {
  constructor(private modulesService: ModulesService) { }

  public modules: ModuleResponse[] = [];
  
  onClick() {
   
  }

  getDate(module: ModuleResponse): string {
    const t = moment(module.lastEditTime);
    t.locale('ru');
    return t.startOf('hour').fromNow();
  }

  async ngOnInit(): Promise<void> {
    this.modules = await this.modulesService.apiModulesGet$Json().toPromise();
    
  }

}
