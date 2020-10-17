/* tslint:disable */
import { ModuleGeneralInformation } from './module-general-information';
export interface Module {
  generalInformation?: ModuleGeneralInformation;
  id?: number;
  lastEditTime?: string;
  title?: null | string;
}
