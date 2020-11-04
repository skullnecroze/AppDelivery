import { DatabaseProvider } from './../../providers/database/database';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  //variaveis
  userForm: FormGroup;
  correctuser:any;
  correctpass:any;
  //fim das variaveis
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController,
    public formBuilder: FormBuilder,
    public databaseProvider: DatabaseProvider) {
    this.userForm = this.formBuilder.group({
      email: new FormControl("", [Validators.required, Validators.email, Validators.minLength(5)]),
      senha: new FormControl("", [Validators.required, Validators.minLength(5)]),
      nascimento: new FormControl("", [Validators.required]),
      genero: new FormControl("", [Validators.required])
    })
  }

  ionViewDidLoad() {

  }

  alreadyUser(){
    this.navCtrl.push("LoginPage")
  }
  


  isInvalid(elementName){
    let element = this.userForm.get(elementName)
    return (element.dirty || element.touched) && element.invalid
  }
  isEmailInvalid(elementName){
    let element = this.userForm.get(elementName)
    return element.errors && element.errors.email && (element.dirty || element.touched);
  }
  getClassInvalid(elementName){
    let element = this.userForm.get(elementName);
    if(element.invalid && element.dirty){
     return {
       'classInvalid': true,
     }
   }
 }
  onSubmitForm(){
    
    const userData = this.userForm.value; //criação constante valor userForm
    
    let userList = this.databaseProvider.getInfo("usuarios"); //criação var local recebendo informações do banco de dados "key" usuário
    if(!userList){ 
      userList = [];
    } //validação do userList (se falso) criar inicializa uma array
    
    const userId = userList.length+1;
    userData.id = userId;
    
    userList.push(userData); //insere o valor de userData dentro da variavel userList
    this.databaseProvider.setInfo("usuarios", userList) //adiciona o valor de userList dentro da "key" usuários no localStorage
    
    this.navCtrl.push("LoginPage");

    //this.correctuser = this.userForm.get('email').value;
    //this.correctpass = this.userForm.get('senha').value;
    //console.log(this.correctuser, this.correctpass)
    //this.navCtrl.push("LoginPage", {
      //senhacerta: this.correctpass,
      //emailcerta: this.correctuser,
    //})
  }

}
