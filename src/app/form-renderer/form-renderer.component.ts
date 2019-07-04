import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { FormInput } from '../form-input.model';
import { NgForm } from '@angular/forms';
import { Answer } from '../answer.model';

@Component({
  selector: 'app-form-renderer',
  templateUrl: './form-renderer.component.html',
  styleUrls: ['./form-renderer.component.css']
})
export class FormRendererComponent implements OnInit {

  constructor(private service: FormService) { }

  groupA: FormInput = {
    type: "text",
    label: "Whats your Name ???",
    options: null,
    answer: ''
  }
  groupB: FormInput = {
    type: "radio",
    label: "Whats your Gender",
    options: ["Male", "Female"],
    answer: ''
  }
  groupC: FormInput = {
    type: "checkbox",
    label: "Whats your Hoppies",
    options: ["Swimming", "video Gaming", "Cycling"],
    answer: ''
  }

  /* aa:Answer = {
    question: 'what',
    answer:'yes'
  }
  ab:Answer = {
    question: 'what',
    answer:'no'
  }
  this.service.answers = [this.aa,this.ab];
 */

  ngOnInit() {
    this.service.forms = [this.groupA, this.groupB, this.groupC];
    console.log(this.service.forms);
  }

  /* optionAssign(col,i){
    console.log(col,i);

  } */

  assignValue(col, i) {
    console.log(col, i)
    if (this.service.forms[i].type == "radio") {
      this.service.forms[i].answer = col;
    } else if (this.service.forms[i].type == "checkbox") {
      //this.service.forms[i].answer = undefined ? '': this.service.forms[i].answer;
      this.service.forms[i].answer = col + "," + this.service.forms[i].answer;
      this.service.forms[i].answer = this.service.forms[i].answer.replace(',undefined','')
    }
  }
  
  submit() {
    
//this.service.postAnswers(this.groupA);
   for(var k = 0;k < this.service.forms.length;k++){
      delete this.service.forms[k].type;
      delete this.service.forms[k].options;
    } 
    console.log(this.service.forms);

    this.service.postAnswers();
  }
  
}
