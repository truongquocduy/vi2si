import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  API_SERVICE = 'https://shoplikefun.com/api';
  header: HttpHeaders|any

  constructor( private HttpClient:HttpClient) { 
      this.header = new HttpHeaders();
      this.header.set('Content-Type', 'application/json')
  }
  get(path:string ='',params={}){
    return new Promise((res,rej)=>{
      try {
          this.HttpClient.get(this.API_SERVICE + path,{params:params,headers:this.header}).subscribe(ress=>{
          res(ress)
          })
      } catch (error) {
          rej(error)
      }
    })

  }
  post(path:string = '', body:any = {}){
    return new Promise((res,rej)=>{
      try {
        this.HttpClient.post(this.API_SERVICE+path,body,{headers:this.header}).subscribe(ress=>{
          res(ress)
        })
      } catch (error) {
        alert('Error')
      }
    })
  }
}
