import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DatabaseProvider {

  constructor() {
    
  }

  setInfo(key: string, value){
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  getInfo(key){
    return JSON.parse(window.localStorage.getItem(key));
  }

}


