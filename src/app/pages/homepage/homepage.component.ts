import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import * as myGlobals from 'src/app/config/global'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  myGlobals:any = myGlobals
  listBestProducts:Product [] = []
  listBestProductsFirst:Product = new Product
  listFeatureProducts:Product [] = []
  listFeatureProductsFirst:Product = new Product
  listDiscountProducts:Product [] = []
  listDiscountProductsFirst:Product = new Product
  listBigProducts:Product [] = []
  listBigProductsFirst:Product = new Product
  listTopProducts:Product [] = []
  listTopProductsFirst:Product = new Product
  listBanner:any [] = []
  isLoader:boolean = true
  constructor(private ProductService:ProductService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.ProductService.getProductHomePage().then((response:any)=>{
      this.listBestProducts = response.data['best-products'].item.filter((element:any,index:number)=>{
        return index < 4;
      })
      this.listBestProductsFirst = this.listBestProducts[0]
      //---------------------
      this.listFeatureProducts = response.data['feature-products'].item.filter((element:any,index:number)=>{
        return index < 4;
      })
      this.listFeatureProductsFirst = this.listFeatureProducts[0]
      //---------------------
      this.listDiscountProducts = response.data['discount-products'].item.filter((element:any,index:number)=>{
        return index < 4;
      })
      this.listDiscountProductsFirst = this.listDiscountProducts[0]
      //---------------------
      this.listBigProducts = response.data['big-products'].item.filter((element:any,index:number)=>{
        return index < 4;
      })
      this.listBigProductsFirst = this.listBigProducts[0]
      //---------------------
      this.listTopProducts = response.data['top-products'].item.filter((element:any,index:number)=>{
        return index < 4;
      })
      this.listTopProductsFirst = this.listTopProducts[0]
      //---------------------
      this.listBanner = response.data['slider-banners'].item
      this.isLoader = false
    })
  }
}
