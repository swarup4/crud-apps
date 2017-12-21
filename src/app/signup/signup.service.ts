import { Injectable } from '@angular/core';
// import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class SignupService {

  // constructor(private http: Http) { }
  constructor() { }

  obj = [{
    empId: "17112",
    name: "Swarup"
  }, {
    empId: "466359",
    name: "Swaroop"
  }];
  
  getServiceValue() {
    return "My Name is Swarup";
  }

}
