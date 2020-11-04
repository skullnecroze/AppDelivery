import { DatabaseProvider } from './../../providers/database/database';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MarketCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-market-create',
  templateUrl: 'market-create.html',
})
export class MarketCreatePage {
//variaveis
lojaForm: FormGroup;
lojaList: Array<any> = [];

//fim das variaveis

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public formBuilder: FormBuilder,
      private databaseProvider: DatabaseProvider) {
        this.inicializaForm();
  }

  ionViewDidLoad() {
    this.lojaList = this.databaseProvider.getInfo("lojas");
    if(!this.lojaList){
      this.lojaList = []
    }
    console.log('ionViewDidLoad MarketCreatePage');
  }

  inicializaForm(){
    this.lojaForm = this.formBuilder.group({
      bannerLoja: new FormControl(""),
      lojaNome: new FormControl("", [Validators.required, Validators.minLength(5)]),
      horarioInicio: new FormControl("", [Validators.required]),
      horarioFinal: new FormControl("", [Validators.required]),
      tipoComida: new FormControl("",[Validators.required])
    })
  }

  irLojas(){
    this.navCtrl.push("MarketPlacePage",{
      lojaList: this.lojaList
    })
  }

  criarLoja(){
    this.lojaList.push(this.lojaForm.value);
    this.databaseProvider.setInfo("lojas", this.lojaList)
    console.log("Lista Lojas", this.lojaList);
    this.inicializaForm();

  }

}
