import {
  HttpHeaders,
  HttpClient,
  HttpResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl = 'http://localhost:3000';
  authToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpqNzg3ODc4IiwiaWF0IjoxNjU4MTk3NDc3LCJleHAiOjE2NTgyMDEwNzd9.9kLdKtg5eyjEiUbcOaRVMaCXsnXwjjxCRI-meTZ8-pc';
  constructor(private http: HttpClient) {}

  private createHttpHeaders(authToken: string): HttpHeaders {
    const result = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });
    return result;
  }

  public postHttpMethod(url: string, body: any): Observable<any> {
    const headers = this.createHttpHeaders(this.authToken);
    const encodeUrl = encodeURI(this.baseUrl + url);

    return this.http.post<any>(encodeUrl, body, {
      headers,
      observe: 'body',
    });
  }

  public getHttpMethod(url: string, httpParam?: HttpParams): Observable<any> {
    const headers = this.createHttpHeaders(this.authToken);
    const encodeUrl = encodeURI(this.baseUrl + url);
    return this.http.get<any>(encodeUrl, {
      headers,
      observe: 'body',
      params: httpParam,
    });
  }

  public deleteHttpMethod(url: string, httpParam?: HttpParams): Observable<any> {
    const headers = this.createHttpHeaders(this.authToken);
    const encodeUrl = encodeURI(this.baseUrl + url);
    return this.http.delete<any>(encodeUrl, {
      headers,
      observe: 'body',
      params: httpParam,
    });
  }
}
