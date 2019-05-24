import React, { Component } from "react";
import { extendObservable } from 'mobx';

class ProductListController {
    
  constructor(){
      extendObservable(this, {

 breakfast: [
  {
      "id": "b1",
      "name": "café americano",
      "type": "beverage",
      "time": "breakfast",
      "price": 5,
      "quantity": 0,
      "selected": false,
      "img": "https://raw.githubusercontent.com/JazminDominguez/CDMX007-fe-burger-queen/master/src/icons/caf%C3%A9.png"
  },
  {
      "id": "b2",
      "name": "café con leche",
      "type": "beverage",
      "time": "breakfast",
      "price": 7,
      "quantity": 0,
      "selected": false,
      "img": "https://raw.githubusercontent.com/JazminDominguez/CDMX007-fe-burger-queen/master/src/icons/caf%C3%A9_leche.png"
  },
  {
      "id": "b3",
      "name": "sandwich de jamón con queso",
      "type": "food",
      "time": "breakfast",
      "price": 10,
      "quantity": 0,
      "selected": false,
      "img": "https://raw.githubusercontent.com/JazminDominguez/CDMX007-fe-burger-queen/master/src/icons/sandwich.png"
  },
  {
      "id": "b4",
      "name": "jugo de frutas natural",
      "type": "beverage",
      "time": "breakfast",
      "price": 7,
      "quantity": 0,
      "selected": false
  }],
  meal:[
  {
      "id": "m1",
      "name": "hamburguesa simple",
      "type": "food",
      "time": "meal",
      "price": 10,
      "quantity": 0,
      "selected": false,
      "img": "https://raw.githubusercontent.com/JazminDominguez/CDMX007-fe-burger-queen/master/src/icons/burger3.png"
  },
  {
      "id": "m2",
      "name": "hamburguesa doble",
      "type": "food",
      "time": "meal",
      "price": 15,
      "quantity": 0,
      "selected": false,
      "img": "https://raw.githubusercontent.com/JazminDominguez/CDMX007-fe-burger-queen/master/src/icons/burger3.png"
  },
  {
      "id": "m3",
      "name": "papas fritas",
      "type": "addings",
      "time": "meal",
      "price": 5,
      "quantity": 0,
      "selected": false,
      "img": "https://raw.githubusercontent.com/JazminDominguez/CDMX007-fe-burger-queen/master/src/icons/papas.png"
  },
  {
      "id": "m4",
      "name": "aros de cebolla",
      "type": "addings",
      "time": "meal",
      "price": 5,
      "quantity": 0,
      "selected": false,
      "img": "https://raw.githubusercontent.com/JazminDominguez/CDMX007-fe-burger-queen/master/src/icons/aros_cebolla.png"
  },
  {
      "id": "m5",
      "name": "agua 500ml",
      "type": "beverage",
      "time": "meal",
      "price": 5,
      "quantity": 0,
      "selected": false,
      "img":"https://raw.githubusercontent.com/JazminDominguez/CDMX007-fe-burger-queen/master/src/icons/agua.png"
  },
  {
      "id": "m6",
      "name": "agua 750ml",
      "type": "beverage",
      "time": "meal",
      "price": 7,
      "quantity": 0,
      "selected": false,
      "img":"https://raw.githubusercontent.com/JazminDominguez/CDMX007-fe-burger-queen/master/src/icons/agua.png"
  },
  {
      "id": "m7",
      "name": "gaseosa 500ml",
      "type": "beverage",
      "time": "meal",
      "price": 7,
      "quantity": 0,
      "selected": false,
      "img": "https://github.com/JazminDominguez/CDMX007-fe-burger-queen/blob/master/src/icons/refresco.png"
  },
  {
      "id": "m8",
      "name": "gaseosa 750ml",
      "type": "beverage",
      "time": "meal",
      "price": 10,
      "quantity": 0,
      "selected": false,
      "img": "https://github.com/JazminDominguez/CDMX007-fe-burger-queen/blob/master/src/icons/refresco.png"
  }],
  extras:[
  {
      "id": "ext1",
      "name": "queso",
      "type": "extras",
      "time": "any",
      "price": 1,
      "quantity": 0,
      "selected": false,
      "img": "https://raw.githubusercontent.com/JazminDominguez/CDMX007-fe-burger-queen/master/src/icons/queso.png"
  },
  {
      "id": "ext2",
      "name": "huevo",
      "type": "extras",
      "time": "any",
      "price": 1,
      "quantity": 0,
      "selected": false,
      "img": "https://raw.githubusercontent.com/JazminDominguez/CDMX007-fe-burger-queen/master/src/icons/huevo.png"
  }],
  ingredient:[
  {
      "id": "ing1",
      "name": "lechuga",
      "type": "ingredients",
      "time": "any",
      "price": 0,
      "quantity": 0,
      "selected": false,
      "img": "https://raw.githubusercontent.com/JazminDominguez/CDMX007-fe-burger-queen/master/src/icons/lechuga.png"
  },
  {
      "id": "ing2",
      "name": "cebolla",
      "type": "ingredients",
      "time": "any",
      "price": 0,
      "quantity": 0,
      "selected": false,
      "img":"https://raw.githubusercontent.com/JazminDominguez/CDMX007-fe-burger-queen/master/src/icons/cebolla.png"
  },
  {
      "id": "ing3",
      "name": "pepinillos",
      "type": "ingredients",
      "time": "any",
      "price": 0,
      "quantity": 0,
      "selected": false,
      "img":"https://raw.githubusercontent.com/JazminDominguez/CDMX007-fe-burger-queen/master/src/icons/pepino.png"
  },
  {
      "id": "ing4",
      "name": "jitomate",
      "type": "ingredients",
      "time": "any",
      "price": 0,
      "quantity": 0,
      "selected": false,
      "img": "https://raw.githubusercontent.com/JazminDominguez/CDMX007-fe-burger-queen/master/src/icons/jitomate.png"
  }],

});}}









let NewProductListController = new ProductListController;

export default NewProductListController;