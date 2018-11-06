import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";


@Injectable()

export class TestProvider {

  constructor(private http: Http) {}
      public data:any=[]=[]
      private baseUrl="http://localhost:3000/api";


      getData(){
        return this.http.get(this.baseUrl)
        .pipe(map(res => res.json()))
      }

      generalGet(url,data={}):Promise<any[]>{

        return this.http.get(`${this.baseUrl}${url}` ,{params:data}).toPromise()
          .then(response =>{
            return response.json() as any[]
          })
          .catch(error =>{
            return error;            
          })
      }

      generalPost(url,data={}):Promise<any[]>{

        return this.http.post(`${this.baseUrl}${url}` , data).toPromise()
        .then(response =>{
          return response.json() as any[]
        })
        .catch(error =>{
          return error;          
        })
      }

      generalPut(url,data={}):Promise<any[]>{
        return this.http.put(`${this.baseUrl}${url}` ,data).toPromise()
          .then(response =>{
            return response.json() as any[]
          })
          .catch(error =>{
            return error
          })
      }

      generalDelete(url,data={}):Promise<any[]>{
        return this.http.delete(`${this.baseUrl}${url}` ,{params:data}).toPromise()
          .then(response =>{
            return response.json() as any[]
          })
          .catch(error =>{
            return error            
          })
      }
}
