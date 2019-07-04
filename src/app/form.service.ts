import { Injectable } from '@angular/core';
import { FormInput } from './form-input.model';
import {Answer} from './answer.model'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  forms:FormInput[];
  answers:Answer[];
  url:string = 'http://localhost:55828/api/answers';

  constructor(private http:HttpClient) { }
  
  postAnswers(){
    this.http.post(this.url,this.forms).subscribe(res => {
      console.log("this is from server",res);
    },err => {
      console.log(err);
    });
  }
}
