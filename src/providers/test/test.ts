import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Storage } from '@ionic/storage';



@Injectable()

export class TestProvider {
  constructor(
    private http: Http,
    private storage: Storage,
  ) { }

  private token: any = "";
  private getToken: any = "";
  private headers: any = {};
  value: string;
  key: string = "token";
  private islogged: boolean;
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
      this.token = val;
      // console.log("VaToken", this.token);
    });
    return this.token;
  }

  getHeaders() {
    this.getToken = localStorage.getItem("token");
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer  ${this.getToken}`
    });
    return this.headers;
  }

  destroyStorage() {
    this.islogged = false;
    this.storage.clear();
    localStorage.clear();
    location.replace('/#/')
  }

  getData() {
    return this.http.get(this.baseUrl)
      .pipe(map(res => res.json()))
  }
  login(url, data = {}): Promise<any[]> {
    return this.http.post(`${this.baseUrl}${url}`, data).toPromise()
      .then(response => {
        console.log("DatLoginService", response);
        let response2 = response.json();
        this.islogged = true;
        // console.log("Logueado", this.islogged)
        localStorage.setItem("logueado", this.islogged +"")
        this.token = response2['token']
        // console.log("Respuesta de login en ts", this.token)
        return response.json() as any[]
      })
      .catch(error => {
        return error;
      })
  }

  generalGet(url, data = {}): Promise<any[]> {
    this.logueo();
    // console.log("Logueado? ",this.islogged)
    if (!this.islogged) {
      this.redirect();
    }
    return this.http.get(`${this.baseUrl}${url}`, { headers: this.getHeaders(), params: data }).toPromise()
      .then(response => {
        let response2 = response.json();
        this.token = response2['token']
        return response.json() as any[]
      })
      .catch(error => {
        return error;
      })
  }

  generalPost(url, data = {}): Promise<any[]> {
    this.logueo();
    // console.log("Logueado? ",this.islogged)
    if (!this.islogged) {
      this.redirect();
    }
    return this.http.post(`${this.baseUrl}${url}`, data, { headers: this.getHeaders() }).toPromise()
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
    this.logueo();
    // console.log("Logueado? ",this.islogged)
    if (!this.islogged) {
      this.redirect();
    }
    return this.http.put(`${this.baseUrl}${url}`, data, { headers: this.headers }).toPromise()
      .then(response => {
        return response.json() as any[]
      })
      .catch(error => {
        return error
      })
  }



  generalDelete(url, data = {}): Promise<any[]> {
    this.logueo();
    // console.log("Logueado? ",this.islogged)
    if (!this.islogged) {
      this.redirect();
    }
    return this.http.delete(`${this.baseUrl}${url}`, { params: data }).toPromise()
      .then(response => {
        return response.json() as any[]
      })
      .catch(error => {
        return error
      })
  }

  redirect(){
    location.replace('/#/');
  }

  logueo(){
    let prueba = localStorage.getItem("logueado");
    if(prueba == "true"){
      this.islogged = true;
    }else{
      this.islogged = false;
    }
    console.log("Logueado",this.islogged)
    
  }
}
