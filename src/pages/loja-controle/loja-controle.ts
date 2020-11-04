import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LojaControlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loja-controle',
  templateUrl: 'loja-controle.html',
})
export class LojaControlePage {
  lojaList:Array<any> =[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lojaList = this.navParams.get("lojaList");
  }


  ionViewDidLoad() {
    console.log(this.lojaList)
    console.log('ionViewDidLoad LojaControlePage');
  }

}
