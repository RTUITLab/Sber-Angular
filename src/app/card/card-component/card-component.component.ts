import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ModuleCompactResponse, ModuleStatus } from 'src/api/models';
import { ModulesService } from 'src/api/services';


@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {
  constructor(private modulesService: ModulesService) { }

  public modules: ModuleCompactResponse[] = [];
  public gradients: Array<number> = [];
  
  onClick() {
  }

  getDate(module: ModuleCompactResponse): string {
    const t = moment(module.lastEditTime);
    t.locale('ru');
    return t.startOf('second').fromNow();
  }

  async ngOnInit(): Promise<void> {
    this.modules = await this.modulesService.apiModulesGet$Json().toPromise();
    this.modules.forEach(() => {
      this.gradients.push(Math.floor(Math.random() * Math.floor(3)));
    })
  }



  getStatus(status: ModuleStatus): string {
    switch (status) {
      case ModuleStatus.MakingCorrection:
        
        return 'Внести правки';
    
      case ModuleStatus.MaterialsChecking:
        return 'Материал проверяется';
      case ModuleStatus.MaterialsNotComplete:
        return 'Незавершенный материал';
      case ModuleStatus.MaterialsReady:
        return 'Готовый материал';
      default:
        return '';
    }
  }


  getColor(status: ModuleStatus) {
    switch (status) {
      case ModuleStatus.MakingCorrection:
        
        return '#FF0000';
    
      case ModuleStatus.MaterialsChecking:
        return '#FFE000';
      case ModuleStatus.MaterialsNotComplete:
        return '#00A4FF';
      case ModuleStatus.MaterialsReady:
        return '#00FF05';
      default:
        return 'white';
    }
  }

  public getBackground(e) {
    console.log(e);
    return this.gradients[e];
  }
}
