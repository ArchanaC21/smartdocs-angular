import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  BASE_URL = environment.BASE_URL;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
    }),
  };


  constructor(private _http: HttpClient) { }

  InsertCompanyMaster(type: any) {
    return this._http.post<any>(
      this.BASE_URL + 'Company/InsertCompanyMaster',
      type,
      this.httpOptions
    );
  }

  GetComapanyVerticalsList() {
    return this._http.get<any>(
      this.BASE_URL + 'Company/GetCompanyVerticals',
      this.httpOptions
    );
  }

  GetComapanyMasterList() {
    return this._http.get<any>(
      this.BASE_URL + 'Company/GetCompany',
      this.httpOptions
    );
  }
}
