import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../../environments/environment';
const API_URL = environment.judgeApi;

@Injectable({
  providedIn: 'root'
})
export class RunnerService {
  paramsEncoded = {base64_encoded: 'true'};
  params = {base64_encoded: 'false'};

  constructor(public http: HttpClient) { }

  submitCode(data) {
    return this.http.post(API_URL + 'submissions', data,  {params: this.paramsEncoded});
  }
  getSubmission(token) {
    return this.http.get<Result>(API_URL + 'submissions/' + token,  {params: this.params});
  }
}
