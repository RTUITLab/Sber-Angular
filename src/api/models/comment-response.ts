/* tslint:disable */
import { CommentStatus } from './comment-status';
import { ModulePart } from './module-part';
export interface CommentResponse {
  answer?: null | string;
  answerAuthor?: null | string;
  answeredTime?: null | string;
  author?: null | string;
  createdTime?: string;
  doneTime?: null | string;
  id?: number;
  message?: null | string;
  part?: ModulePart;
  pathToField?: null | string;
  status?: CommentStatus;
}
