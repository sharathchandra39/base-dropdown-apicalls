import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRestCallsService {

  constructor(private http: HttpClient) { }

  getDoctypes() : Observable<any> {
    // Here invoking the API as local json - if you any API which is giving similar type of API response - replace with that endpoint - logic would be mostly similar
    const restAPIURI = './assets/sample_json/doctypes.json';
    return this.http.get(restAPIURI);
  }

  fetchDoctypeResults(): Observable<any> {
    const restAPIURI = './assets/sample_json/doctype_results.json';
    return this.http.get(restAPIURI);
  }

  fetchUUIDResults(): Observable<any> {
    const restAPIURI = './assets/sample_json/doctype_uuid_results.json';
    return this.http.get(restAPIURI);
  }
}
