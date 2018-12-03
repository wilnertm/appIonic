import { Component } from '@angular/core';
import { TestProvider } from '../../providers/test/test';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {

  public detail: any = {}
  text: string;
  key: string = "token";

  constructor(
    private test: TestProvider,
    public navCtrl: NavController,
  ) { }

  login() {
    this.test.login(`/login`, this.detail)
      .then(data => {
        this.detail = data;
        console.log("Token", this.detail.token);
        this.test.setStorage(this.detail.token);
        localStorage.setItem("token", this.detail.token)
        if (this.detail.status == 404) {
          alert("Usuario y/o contraseña incorrectos")
          location.reload()
        } if (this.detail.status == 403) {
          alert("Usuario y/o contraseña incorrectos")
          location.reload()
        } else {
          location.replace("/#/usuario")
          console.log("Detalle", this.detail);
        }
      })
  }


}
