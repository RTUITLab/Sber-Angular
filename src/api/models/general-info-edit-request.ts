/* tslint:disable */
import { ModuleVisibility } from './module-visibility';
export interface GeneralInfoEditRequest {
  basicIdea?: null | string;
  classLevel?: number;
  course?: null | string;
  laborIntensity?: number;
  problemQuestion?: null | string;
  tags?: null | Array<string>;
  visibility?: ModuleVisibility;
}
