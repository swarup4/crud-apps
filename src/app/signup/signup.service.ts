import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SignupService {

  // private http;
  constructor(private http: Http) { }

  obj = [{
    empId: "17112",
    name: "Swarup"
  }, {
    empId: "466359",
    name: "Swaroop"
  }];
  apiUrl = "http://localhost:3000/employees";

  getServiceValue() {
    return this.http.get(this.apiUrl).map((res) => {
      return res;
    })
  }
  getSearchPromiseValue(name) {
    let params = new URLSearchParams();
    params.set('term', name);
    params.set('media', 'music');
    params.set('limit', '20');
    let searchUrl = "https://itunes.apple.com/search";
    return this.http.get(searchUrl, { params }).map(res => {
      return res.json();
    })
  }

  getAuthToken() {
    // let httpOptions = {
    //   headers: new HttpHeaders().set("Authorization", btoa('swarup')).set('Content-Type', 'application/json')
    // };
    let headers = new Headers();
    headers.append('Authorization', btoa('Swarup'));
    let reqOpts = new RequestOptions();
    reqOpts.headers = headers;
    this.http.get(this.apiUrl, reqOpts).toPromise().then(res => {
      return res;
    }, err => {
      console.error(`Error: ${err.status} ${err.statusText}`);
    });
  }
}
