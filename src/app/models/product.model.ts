import { User } from "./user.model"

export class Product{
    id:number = 0
    user_id:number = 0
    photo:string = ""
    name:string = ""
    details:string = ""
    slug:string = ""
    features:string = ""
    colors:string = ""
    thumbnail:string = ""
    price:number = 0
    previous_price:string = ""
    attributes:string = ""
    size:string = ""
    size_price:any = []
    discount_date:string = ""
    weight:number = 0
    type:string = ""
    price_shopping_point:number = 0
    percent_price:number = 0
    percent_shopping_point:number = 0
    user:User = new User
}