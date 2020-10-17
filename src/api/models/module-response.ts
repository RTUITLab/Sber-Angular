/* tslint:disable */
import { ModuleVisibility } from './module-visibility';
export interface ModuleResponse {
  basicIdea?: null | string;
  classLevel?: number;
  course?: null | string;
  id?: number;
  laborIntensity?: number;
  lastEditTime?: string;
  problemQuestion?: null | string;
  tags?: null | Array<string>;
  title?: null | string;
  visibility?: ModuleVisibility;
}
