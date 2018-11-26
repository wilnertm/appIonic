import { Component } from '@angular/core';
import { TestProvider } from '../../providers/test/test';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {

  public detail:any={}
  text: string;

  constructor(
    private test: TestProvider,
    public navCtrl: NavController, 
    ) {}

  login(){
    let email = this.detail.email
    let password = this.detail.password
    this.test.generalPost(`/usuario/emailto/${email},${password}`, this.detail)
      .then( data =>{
        this.detail = data;
        if(this.detail.status == 404){
          alert("Usuario y/o contraseña incorrectos")
          location.reload()
        }else{
          location.replace("/#/usuario")
          console.log("Detalle",this.detail);
          
        }
      })
  }

}
