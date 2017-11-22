import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  nameForm: FormGroup;
  status: boolean = false;
  status1: boolean = false;
  name_input = '';
  name:Array<string> =['Selvaraj','SelvaKartig'];
  constructor(private fb: FormBuilder) {
    localStorage.setItem("names",JSON.stringify(this.name));
  }

  buildForm() {
    this.nameForm = this.fb.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.pattern("^[^!@#+%^()+<>?|'\"/;`%]*$"),
        Validators.pattern('[A-Z]+[a-z0-9]*'),
        // Validators.pattern("^[^'\"/;`%]*$"),
        // this.ValidateName,
      ])],
    });
  }

  ngOnInit() {
    this.buildForm();
  }
 
  ValidateName(c: AbstractControl): { [key: string]: boolean} | null
  {
    if((c.value!==undefined) && (isNaN(c.value)))
    {
      var count=0;
      var names = JSON.parse(localStorage.getItem("names"));
      for(let i=0;i<names.length;i++)
      {
        if(c.value != names[i])
        {
          count++;
          console.log('names:'+names[i]);
        }
        else{
          break;
        }
      }
    if(count<names.length)
    {
      return {error:true};
    }
     return null;
    }
  }

  FormSubmit(data) {
    console.log(data);
    var name = JSON.parse(localStorage.getItem("names"));
      name.push(data.name);
      localStorage.setItem("names",JSON.stringify(name));
      this.nameForm.reset();
      this.status = true;
      setTimeout(() => { this.status = false; }, 5000);
  }

 
}
