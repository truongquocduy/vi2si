import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService{

  constructor(httpClient: HttpClient){
    super(httpClient);
  }
  getCategory(){
    return this.get('/client/category')
  }
}
