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
  public gradient: Array<number> = [];
  
  onClick() {
   
  }

  getDate(module: ModuleResponse): string {
    const t = moment(module.lastEditTime);
    t.locale('ru');
    return t.startOf('second').fromNow();
  }

  async ngOnInit(): Promise<void> {
    this.modules = await this.modulesService.apiModulesGet$Json().toPromise();
    this.modules.forEach(() => {
      this.gradient.push(Math.floor(Math.random() * Math.floor(3)));
    })
  }

  public getBackground(e) {
    return e.attr('grad') || Math.floor(Math.random() * Math.floor(3));
  }
}
