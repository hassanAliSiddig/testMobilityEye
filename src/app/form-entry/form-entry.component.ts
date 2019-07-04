import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form-entry',
  templateUrl: './form-entry.component.html',
  styleUrls: ['./form-entry.component.css']
})
export class FormEntryComponent implements OnInit {

  constructor(private service:FormService) { }

  jsonForm:string = '';

  ngOnInit() {
  }
  buildTheForm(){
    var myObj = JSON.parse(this.jsonForm);
    this.service.forms = myObj.form;
    console.log(this.jsonForm, myObj);
  }

}
