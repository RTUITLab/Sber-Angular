import { Component, OnInit } from '@angular/core';
import { CreateEditModuleRequest } from 'src/api/models';
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
  constructor(private route: ActivatedRoute, private modulesService: ModulesService) { }

tag: string;
class: string;
time: string;
visibility: string;
id: string;

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
  }

  async onClick() {
    console.log(this.module);
    this.module.classLevel = +this.class;
    this.module.laborIntensity = +this.time;
    this.module.visibility = ModuleVisibility[this.visibility];
    this.module.tags.push(this.tag);
    await this.modulesService.apiModulesPost$Json( {
      body: this.module
    }).toPromise();
    
  }

}
