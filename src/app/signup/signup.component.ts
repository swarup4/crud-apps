import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  pageName = 'Sign Up Page';
  constValue; arrayData; authValue; 
  searchData;

  constructor(private signupService: SignupService) { }

  getServiceData(){
    console.log(this.signupService.obj);
    this.arrayData = this.signupService.obj;
  }

  getJsonData(){
    // this.signupService.getServiceValue().subscribe((res) => {
    //   this.constValue = res;
    // });
    this.signupService.getServiceValue().toPromise().then((res) => {
      this.constValue = res;
    }, err => {
      console.error(`Error: ${err.status} ${err.statusText}`);
    });
  }
  getSearchData(search){
    this.signupService.getSearchPromiseValue(search).toPromise().then(data => {
      debugger;
      this.searchData = data.results;
    })
  }
  getAuthTokenData(){
    this.authValue = this.signupService.getAuthToken();
  }

  ngOnInit() { }
}
