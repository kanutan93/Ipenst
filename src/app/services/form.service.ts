import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {environment} from '../../environments/environment';

@Injectable()
export class FormService {

  constructor(private http: Http) { }

  onPost(form) {
    this.http.post(environment.API, form).subscribe();
  }

}
