import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


@IonicPage({
  name: "login"
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})


export class LoginPage {
  
  public detail:any={}

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }



}
