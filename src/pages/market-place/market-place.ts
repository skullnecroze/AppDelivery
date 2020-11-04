import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MarketPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-market-place',
  templateUrl: 'market-place.html',
})
export class MarketPlacePage {
  lojaList: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lojaList = this.navParams.get("lojaList");
  }

  openLoja(loja){
    this.navCtrl.push("LojaPage", {
      loja: loja
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarketPlacePage');
  }

}
