import { Injectable } from '@angular/core';
import { Car } from '../models/car/car';
import { CartItem } from '../models/cartItem/cartItem';
import { CartItems } from '../models/cartItem/cartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(car:Car){
    let item = CartItems.find(c=>c.car.carId==car.carId);

    if(item){
      item.quantiy+=1;
    }else{
      let cartItem = new CartItem();
      cartItem.car = car;
      cartItem.quantiy =1;
      CartItems.push()
    }
  }

  list():CartItem[]{
    return CartItems;
  }

}
