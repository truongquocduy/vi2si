import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService{

  constructor(httpClient: HttpClient){
    super(httpClient);
  }
  getProductHomePage(){
    return this.get('/client/homepage')
  }
  getProductById(id:number){
    return this.get('/client/product/' + id)
  }
}
