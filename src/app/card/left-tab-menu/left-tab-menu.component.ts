import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CourseResponse } from 'src/api/models/course-response';
import { CoursesService } from 'src/api/services/courses.service';
import { TagsService } from 'src/api/services/tags.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-left-tab-menu',
  templateUrl: './left-tab-menu.component.html',
  styleUrls: ['./left-tab-menu.component.css']
})
export class LeftTabMenuComponent implements OnInit, OnDestroy {

  constructor(
    private courseService: CoursesService,
    private tagsService: TagsService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  public courses: CourseResponse[] = [];
  public tags: string[] = [];

  public availableTags(): string[] {
    const tagsRow: string = this.route.snapshot.queryParams["tag"] || "";
    let tags = [];
    if (tagsRow) {
      tags = tagsRow.split("_");
    }
    return this.tags.filter(t => tags.indexOf(t) < 0);
  }
  title: string;
  course: number;
  tag: string;
  class: number;

  sub;
  async ngOnInit(): Promise<void> {
    this.courses = await this.courseService.apiCoursesGet$Json().toPromise();
    this.tags = await this.tagsService.apiTagsGet$Json().toPromise();
    this.sub = this.route.queryParamMap.subscribe(d => {
      this.course = +d.get("course");
      this.class = +d.get("class");
    }
    );
  }

  courseChanged(value) {
    this.saveParams(
      this.route.snapshot.queryParams["tag"],
      value,
      this.route.snapshot.queryParams["class"],
      this.route.snapshot.queryParams["title"]);
  }
  classChanged(value) {
    // this.class = +value;
    this.saveParams(
      this.route.snapshot.queryParams["tag"],
      this.route.snapshot.queryParams["course"],
      value,
      this.route.snapshot.queryParams["title"]);
  }

  tagChanged(value) {
    console.log(this.route.snapshot);
    const tagsRow: string = this.route.snapshot.queryParams["tag"] || "";
    let tags = [];
    if (tagsRow) {
      tags = tagsRow.split("_");
    }
    tags.push(value);
    this.saveParams(
      tags.join('_'),
      this.route.snapshot.queryParams["course"],
      this.route.snapshot.queryParams["class"],
      this.route.snapshot.queryParams["title"])

    setTimeout(() => {
      this.tag = null;
    }, 50);
  }
  titleChanged(value) {
    this.saveParams(
      this.route.snapshot.queryParams["tag"],
      this.route.snapshot.queryParams["course"],
      this.route.snapshot.queryParams["class"],
      value);
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

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
