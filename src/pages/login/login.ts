import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TestProvider } from '../../providers/test/test';


@IonicPage({
  name: "login"
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})


export class LoginPage {
  
  public detail:any={}

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private test: TestProvider
    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }



}
