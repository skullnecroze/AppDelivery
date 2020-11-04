import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openRegistroPage(){
    this.navCtrl.push("RegistroPage", {mensagem:"texto babaca", duracao:3000})
  }

}
