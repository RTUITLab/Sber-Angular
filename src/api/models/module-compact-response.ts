/* tslint:disable */
import { ModuleStatus } from './module-status';
export interface ModuleCompactResponse {
  classLevel?: number;
  courseId?: number;
  creator?: null | string;
  id?: number;
  lastEditTime?: string;
  status?: ModuleStatus;
  tags?: null | Array<string>;
  title?: null | string;
}
