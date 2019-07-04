import { Injectable } from '@angular/core';
import { FormInput } from './form-input.model';
import {Answer} from './answer.model'
@Injectable({
  providedIn: 'root'
})
export class FormService {

  forms:FormInput[];
  answers:Answer[];

  constructor() { }
}
