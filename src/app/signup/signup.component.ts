import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  pageName = 'Sign Up Page';
  constValue;
  arrayData;

  constructor(private signupService: SignupService) { }

  getServiceData(){
    console.log(this.signupService.obj)
    this.arrayData = this.signupService.obj;
  }

  ngOnInit() { 
    this.constValue = this.signupService.getServiceValue();
  }
}
