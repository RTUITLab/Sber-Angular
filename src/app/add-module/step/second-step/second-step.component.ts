import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TeacherInstructionsService } from 'src/api/services';
import { TeacherInstructionsResponse } from 'src/api/models';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.css']
})
export class SecondStepComponent implements OnInit {

  constructor(private route: ActivatedRoute, private teacherService: TeacherInstructionsService, private router: Router) { }

  id: string;
  teacher: TeacherInstructionsResponse = {
    challenges: '',
    exercisesByLessons: '',
    generalMeaning: ''
  };

  async onClickNext() {
    await this.teacherService.apiModulesModuleIdTeacherInstructionsPut({moduleId: +this.id, body: this.teacher}).toPromise();
    this.router.navigate(['']);
  }

  async ngOnInit(): Promise<void> {
      this.id = this.route.snapshot.paramMap.get('id');

      this.teacher = await this.teacherService.apiModulesModuleIdTeacherInstructionsGet$Json({moduleId: +this.id}).toPromise();
  }


}
