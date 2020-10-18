import { ThrowStmt } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ModuleStatus } from 'src/api/models/module-status';
import { ModuleCompactResponse, ModuleResponse } from 'src/api/models';
import { ModulesService } from 'src/api/services';


@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit, OnDestroy {
  constructor(
    private modulesService: ModulesService,
    private router: Router,
    private route: ActivatedRoute) { }

  public modules: ModuleCompactResponse[] = [];
  public gradients: Array<number> = [];
  
  onClick() {
   
  }

  course: number;
  tags: string[] = [];
  class: number;
  title: string = "";

  availableModules(): ModuleCompactResponse[] {
    let result = this.modules;
    if (this.tags.length > 0) {
      result = result.filter(m => m.tags.filter(t => this.tags.includes(t)).length > 0)
    }
    if (this.class) {
      result = result.filter(m => m.classLevel == this.class);
    }
    if (this.course) {
      result = result.filter(m => m.courseId == this.course);
    }
    if (this.title) {
      result = result.filter(m => m.title.toUpperCase().indexOf(this.title.toUpperCase()) >= 0);
    }
    return result;
  }

  getDate(module: ModuleCompactResponse): string {
    const t = moment(module.lastEditTime);
    t.locale('ru');
    return t.startOf('second').fromNow();
  }
  sub;
  async ngOnInit(): Promise<void> {
    this.modules = await this.modulesService.apiModulesGet$Json().toPromise();
    this.sub = this.route.queryParamMap.subscribe(d => {
      const tagsRow = this.route.snapshot.queryParams["tag"];
      if (tagsRow) {
        this.tags = tagsRow.split('_');
      } else {
        this.tags = [];
      }
      if (d.get("course")) {
        this.course = +d.get("course");
      } else {
        this.course = null;
      }
      if (d.get("class")) {
        this.class = +d.get("class");
      } else {
        this.class = null;
      }
      this.title = d.get("title");
    });
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

  public getIcon(i: number) {
    let icons = [
      'earth-day.svg',
      'recycle-bag.svg',
      'windmill.svg'
    ];

    return icons[i % icons.length];
  }

  removeTag(tag: string) {
    console.log(tag);
    this.tags = this.tags.filter(t => t !== tag);
    this.saveParams(
      this.tags.join("_"),
      this.route.snapshot.queryParams["course"],
      this.route.snapshot.queryParams["class"],
      this.route.snapshot.queryParams["title"]
    );
  }

  saveParams(
    tag: string,
    course: string,
    _class: string,
    title: string) {
    const params = {};
    if (tag) {
      params["tag"] = tag;
    }
    if (course) {
      params["course"] = course;
    }
    if (_class) {
      params["class"] = _class;
    }
    if (title) {
      params["title"] = title;
    }
    this.router.navigate(['.'], { relativeTo: this.route, queryParams: params });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
