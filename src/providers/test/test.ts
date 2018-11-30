import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Storage } from '@ionic/storage';
import { Header } from 'ionic-angular';
import { jsonpFactory } from '@angular/http/src/http_module';


@Injectable()

export class TestProvider {
  constructor(
    private http: Http,
    private storage: Storage,
  ) { }

  private token: any="";
  headers: any = {};
  // headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json','Authorization':'Bearer '+this.token });
  value: string;
  key: string = "token";
  private islogged = false;
  public data: any = [] = [];
  private baseUrl = "http://localhost:3000/api";

  setStorage(value) {
    // guardar una llave y un valor key/value
    this.storage.set(this.key, value);
    // this.getStorage();
  }
  getStorage() {
    // Obtener el token desde el storage
    this.storage.get(this.key).then((val) => {
      // console.log('Your token is', val);
      this.token = val;
      console.log("VaToken", this.token);
      this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json', 'Authorization': 'Bearer ' + this.token });
    });
  }

  destroyStorage() {
    this.storage.clear();
  }

  getData() {
    return this.http.get(this.baseUrl)
      .pipe(map(res => res.json()))
  }
  login(url, data = {}): Promise<any[]> {
    return this.http.post(`${this.baseUrl}${url}`, data).toPromise()
      .then(response => {
        let response2 = response.json();
        this.islogged = true;
        this.token = response2['token']
        console.log("Respuesta de login en ts", this.token)
        return response.json() as any[]
      })
      .catch(error => {
        return error;
      })
  }

  generalGet(url, data = {}): Promise<any[]> {
    // if (!this.islogged) {
    //   return;
    // }
    console.log("Token en get", this.token)
    // this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json', 'Authorization': 'Bearer ' + this.token });
    // data['headers'] = this.headers;
    console.log("Headers en get", this.getHeaders());
    let headers = new Headers({ 
      'Content-Type': 'application/x-www-form-urlencoded', 
      'Accept': 'application/json','Authorization':'Bearer '+this.token 
    });
    return this.http.get(`${this.baseUrl}${url}`, { headers: headers, params: data }).toPromise()
      .then(response => {
        let response2 = response.json();
        this.token = response2['token']
        console.log("GetGeneralInfo", response)
        return response.json() as any[]
      })
      .catch(error => {
        return error;
      })
  }

  generalPost(url, data = {}): Promise<any[]> {
    let headers = new Headers({ 
      'Content-Type': 'application/x-www-form-urlencoded', 
      'Accept': 'application/json','Authorization':'Bearer '+this.token 
    });
    // if (!this.islogged) {
    //   return;
    // }
    // data["token"]=this.token;
    // this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json', 'Authorization': 'Bearer ' + this.token });
    console.log("Headers en post", this.getHeaders());
    return this.http.post(`${this.baseUrl}${url}`, data, {headers: headers }).toPromise()
      .then(response => {
        let response2 = response.json();
        this.token = response2['token']
        console.log("PostGeneralInfo", response)
        this.setStorage(this.token);
        return response.json() as any[]
      })
      .catch(error => {
        return error;
      })

  }


  generalPut(url, data = {}): Promise<any[]> {
    // if (!this.islogged) {
    //   return;
    // }
    return this.http.put(`${this.baseUrl}${url}`, data, { headers: this.headers }).toPromise()
      .then(response => {
        return response.json() as any[]
      })
      .catch(error => {
        return error
      })
  }

  getHeaders() {
    let headers = new Headers({ 
      'Content-Type': 'application/x-www-form-urlencoded', 
      'Accept': 'application/json','Authorization':'Bearer '+this.token 
    });
    return headers;
  }

  generalDelete(url, data = {}): Promise<any[]> {
    // if (!this.islogged) {
    //   return;
    // }
    return this.http.delete(`${this.baseUrl}${url}`, { params: data }).toPromise()
      .then(response => {
        return response.json() as any[]
      })
      .catch(error => {
        return error
      })
  }
}
