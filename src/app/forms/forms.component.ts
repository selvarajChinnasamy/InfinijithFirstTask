import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  names: Array<string> = [];
  nameForm: FormGroup;
  status: boolean = false;
  status1: boolean = false;
  name_input = '';
  constructor(private fb: FormBuilder) {
  }

  buildForm() {
    this.nameForm = this.fb.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('[A-Z][a-z]+[0-9]*'),
        Validators.pattern("^[^-&$_'\"/;`%]*$")
      ])],
    });
  }

  ngOnInit() {
    this.buildForm();
  }

  FormSubmit(data) {
    console.log(data);
    if (this.CheckNames(data.name)) {
      this.status1 = true;
      this.name_input = data.name;
      setTimeout(() => { this.status1 = false; }, 5000);
    }
    else {
      this.names.push(data.name);
      this.nameForm.reset();
      this.status = true;
      setTimeout(() => { this.status = false; }, 5000);
    }
  }

  CheckNames(data) {
    let len = this.names.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
      if (this.names[i] != data) {
        count++;
      }
      else {
        break;
      }
    }
    if (count < len) {
      return true;
    }
    else {
      return false;
    }
  }
}
