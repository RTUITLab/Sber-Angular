/* tslint:disable */
import { GeneralInfoTag } from './general-info-tag';
import { Module } from './module';
import { ModuleVisibility } from './module-visibility';
export interface ModuleGeneralInformation {
  basicIdea?: null | string;
  classLevel?: number;
  course?: null | string;
  id?: number;
  laborIntensity?: number;
  module?: Module;
  moduleId?: number;
  problemQuestion?: null | string;
  tags?: null | Array<GeneralInfoTag>;
  visibility?: ModuleVisibility;
}
