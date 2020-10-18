import { Component, OnInit } from '@angular/core';
import { CreateEditModuleRequest, ModuleCompactResponse, ModuleResponse } from 'src/api/models';
import { ModulesService } from 'src/api/services';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ModuleVisibility } from 'src/api/models/module-visibility';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.css']
})
export class FirstStepComponent implements OnInit {
  module: CreateEditModuleRequest = {
    basicIdea: '',
    classLevel: 10,
    course: '',
    laborIntensity: 1,
    problemQuestion: '',
    tags: [],
    title: '',
    visibility: ModuleVisibility.School
  };
  constructor(private route: ActivatedRoute, private modulesService: ModulesService, private router: Router) { }

tag: string;
class: string;
time: string;
visibility: string;
id: string;

fullModel: ModuleResponse;

modelR: ModuleCompactResponse;

  async ngOnInit(): Promise<void> {
      this.id = this.route.snapshot.paramMap.get('id');
      console.log(this.id);
      
      if (this.id !== null){
        this.fullModel = await this.modulesService.apiModulesIdGet$Json({id: +(this.id)}).toPromise();
        console.log(this.fullModel);
        this.module = this.fullModel;
        this.class = this.fullModel.classLevel.toString();
        this.visibility = this.fullModel.visibility.toString();
        this.time = this.fullModel.laborIntensity.toString();
      }
  }

  async onClickPut() {
    this.router.navigate(['../../secondStep/', this.id], { relativeTo: this.route});
    this.module.classLevel = +this.class;
    this.module.laborIntensity = +this.time;
    this.module.visibility = ModuleVisibility[this.visibility];
    this.module.tags.push(this.tag);
    await this.modulesService.apiModulesIdPut( {id: +(this.id),
      body: this.module
    }).toPromise();
    this.router.navigate(['../secondStep/', this.modelR.id], { relativeTo: this.route});
  }

  async onClickCreate() {
    console.log(this.module);
    this.module.classLevel = +this.class;
    this.module.laborIntensity = +this.time;
    this.module.visibility = ModuleVisibility[this.visibility];
    this.module.tags.push(this.tag);
    this.modelR = await this.modulesService.apiModulesPost$Json( {
      body: this.module
    }).toPromise();
    this.router.navigate(['../secondStep/', this.modelR.id], { relativeTo: this.route});
  }

}
