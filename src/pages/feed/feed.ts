import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  goToComprador(){
    this.navCtrl.push('MarketPlacePage')
  }
  goToVendedor(){
    this.navCtrl.push('MarketCreatePage')
  }

  ngOnInit(){
    const alert = this.alertCtrl.create({
      title: 'Você é um comprador ou vendedor?',
      subTitle: 'Escolha uma das opções abaixo:',
      buttons: [
        {
          text: 'Comprador',
          handler: () => {
            this.goToComprador();
          }},
          {
          text: 'Vendedor',
          handler:() => {
            this.goToVendedor()}
          }]
    });
    alert.present();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

}
