import { Injectable } from '@angular/core';

@Injectable()
export class FormServiceService {
  names=['Selvaraj'];
  constructor() {
    localStorage.setItem("names", JSON.stringify(this.names));
   }

  FormSubmit(data) {
    var name = JSON.parse(localStorage.getItem("names"));
    name.push(data.name);
    if(localStorage.setItem("names", JSON.stringify(name))==null)
    {
      return {status:true};
    }else{
      return {status:false};
    }
  }
}
