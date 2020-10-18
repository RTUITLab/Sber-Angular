/* tslint:disable */
import { ModuleVisibility } from './module-visibility';
export interface CreateEditModuleRequest {
  basicIdea?: null | string;
  classLevel?: number;
  course?: null | string;
  laborIntensity?: number;
  problemQuestion?: null | string;
  tags?: null | Array<string>;
  title?: null | string;
  visibility?: ModuleVisibility;
}
