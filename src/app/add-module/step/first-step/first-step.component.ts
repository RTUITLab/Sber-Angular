import { Component, OnInit } from '@angular/core';
import { CreateEditModuleRequest, ModuleCompactResponse } from 'src/api/models';
import { ModulesService } from 'src/api/services';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ModuleVisibility } from 'src/api/models/module-visibility';

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

modelR: ModuleCompactResponse;

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
  }

  onClickPut() {
    this.router.navigate(['../../secondStep/', this.id], { relativeTo: this.route});
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
