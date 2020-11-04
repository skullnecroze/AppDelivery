import { DatabaseProvider } from './../../providers/database/database';
import { AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
class Credenciais{
  email:string;
  senha:string;
}
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
//variaveis
credencial:Credenciais



//fim das variaveis
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public databaseProvider: DatabaseProvider) {
  }
  ngOnInit(){
    this.credencial = new Credenciais();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginError(){
    const alert = this.alertCtrl.create({
      title: 'Credenciais Inválidas',
      subTitle: 'O email ou senha digitados não correspondem à credenciais válidas',
      buttons: ['OK']
    });
    alert.present();

  }

  doSignUp(){
    this.navCtrl.push("RegistroPage")
  }

  doLogin(){
    let userList = this.databaseProvider.getInfo("usuarios");
    if(!userList){
      userList = []
    }
    

    //cria flag falsa para quebrar o FOR no final
    //roda o for iterando variavel(userListItem) de uma array (userList)
    //roda o if procurando a variavel do for dentro da array.
    //seta variavel (encontrado) true para não exibir alerta se encontrar
    //cria o userID no banco de dados
    //avança para a pagina de Feed.
    
    let encontrado = false;
    for(const userListItem of userList){
      if(userListItem.email === this.credencial.email && userListItem.senha === this.credencial.senha){
        encontrado = true;
        this.databaseProvider.setInfo("userId", userListItem.id)
        this.navCtrl.push("FeedPage");
      }
    }
    if(!encontrado){
      this.loginError()
    }
  }
}
