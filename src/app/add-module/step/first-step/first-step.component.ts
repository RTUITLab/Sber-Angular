import { Component, OnInit } from '@angular/core';
import { CreateEditModuleRequest, ModuleCompactResponse, ModuleResponse, CourseResponse, CommentResponse } from 'src/api/models';
import { ModulesService, CoursesService, CommentsService } from 'src/api/services';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ModuleVisibility } from 'src/api/models/module-visibility';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.css']
})
export class FirstStepComponent implements OnInit {
  module: CreateEditModuleRequest = {
    basicIdea: '',
    classLevel: 10,
    courseId: 0,
    laborIntensity: 1,
    problemQuestion: '',
    tags: [],
    title: '',
    visibility: ModuleVisibility.School
  };
  // tslint:disable-next-line: max-line-length
  constructor(
    private route: ActivatedRoute, 
    private modulesService: ModulesService, 
    private router: Router,
    private courseService: CoursesService, 
    private commentService: CommentsService,
    public dialog: MatDialog) { }

tag: string;
class: string;
time: string;
visibility: string;
id: string;
course: number;

courses: CourseResponse[] = [];
tags: string[] = [];

fullModel: ModuleResponse;

isChecked = false;

// tslint:disable-next-line: new-parens
commentMap = new Map();

comments: CommentResponse[] = [];

modelR: ModuleCompactResponse;

  async ngOnInit(): Promise<void> {
      this.courses = await this.courseService.apiCoursesGet$Json().toPromise();

      this.id = this.route.snapshot.paramMap.get('id');
      
      if (this.id !== null){
        this.fullModel = await this.modulesService.apiModulesIdGet$Json({id: +(this.id)}).toPromise();
        console.log(this.fullModel);
        this.module = this.fullModel;
        this.course = this.fullModel.course.id;
        this.tags = this.module.tags;
        this.class = this.fullModel.classLevel.toString();
        this.visibility = this.fullModel.visibility.toString();
        this.time = this.fullModel.laborIntensity.toString();
        this.isChecked = this.fullModel.generalPart.containsError;
        if (this.isChecked)  {
          this.comments = await this.commentService.apiModulesModuleIdCommentsGet$Json({moduleId: +this.id}).toPromise();
          for(let i of this.comments)
          {
            if(i.part === 'General') {
              this.commentMap.set(i.pathToField, i.message);
            }
          }
        }
      }
  }
  onEnter(event) {
    this.tags.push(event.target.value);
    this.tag = null;
  }

  async onClickPut() {
    this.router.navigate(['../../secondStep/', this.id], { relativeTo: this.route});
    this.module.classLevel = +this.class;
    this.module.laborIntensity = +this.time;
    this.module.visibility = ModuleVisibility[this.visibility];
    this.module.tags = this.tags;
    this.module.courseId = this.course;
    await this.modulesService.apiModulesIdPut( {id: +(this.id),
      body: this.module
    }).toPromise();
    this.router.navigate(['../secondStep/', this.id], { relativeTo: this.route});
  }

  deleteTag(t: string) {
    this.tags.splice(this.tags.indexOf(t), 1);
  }

  async onClickCreate() {
    console.log(this.module);
    this.module.classLevel = +this.class;
    this.module.laborIntensity = +this.time;
    this.module.visibility = ModuleVisibility[this.visibility];
    this.module.tags = this.tags;
    this.module.courseId = this.course;
    this.modelR = await this.modulesService.apiModulesPost$Json( {
      body: this.module
    }).toPromise();
    this.router.navigate(['../secondStep/', this.modelR.id], { relativeTo: this.route});
  }
  openDialog() {
    const dialogRef = this.dialog.open(CommentDialog, {maxWidth: 500, minHeight: 500});

    dialogRef.afterClosed().subscribe(async result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        // await this.commentService.apiModulesModuleIdCommentsIdRejectPost$Json( {
        //   moduleId: module.id,
        //   id: 1,
        //   UserName: "username",
        //   body: ""
        // })
      }
    });
  }

}


@Component({
  selector: 'comment-dialog',
  templateUrl: '../CommentDialog.html',
})
export class CommentDialog {}