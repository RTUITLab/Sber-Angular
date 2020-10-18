import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TeacherInstructionsService, CommentsService } from 'src/api/services';
import { TeacherInstructionsResponse, CommentResponse } from 'src/api/models';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.css']
})
export class SecondStepComponent implements OnInit {

  constructor(private route: ActivatedRoute, private teacherService: TeacherInstructionsService,
              private router: Router, private commentService: CommentsService) { }

  id: string;
  teacher: TeacherInstructionsResponse = {
    challenges: '',
    exercisesByLessons: '',
    generalMeaning: ''
  };

// tslint:disable-next-line: new-parens
commentMap = new Map();

comments: CommentResponse[] = [];

  async onClickNext() {
    await this.teacherService.apiModulesModuleIdTeacherInstructionsPut({moduleId: +this.id, body: this.teacher}).toPromise();
    this.router.navigate(['']);
  }

  async onClickBack() {
    await this.teacherService.apiModulesModuleIdTeacherInstructionsPut({moduleId: +this.id, body: this.teacher}).toPromise();
  }

  async ngOnInit(): Promise<void> {
      this.id = this.route.snapshot.paramMap.get('id');

      this.teacher = await this.teacherService.apiModulesModuleIdTeacherInstructionsGet$Json({moduleId: +this.id}).toPromise();

      this.comments = await this.commentService.apiModulesModuleIdCommentsGet$Json({moduleId: +this.id}).toPromise();
      for (let i of this.comments)
      {
          if (i.part === 'TeacherInstructions') {
              this.commentMap.set(i.pathToField, i.message);
          }
      }
 }


}
