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
    // let email = this.detail.email
    // let password = this.detail.password
    this.test.login(`/login`, this.detail)
      .then(data => {
        this.detail = data;
        console.log("Token", this.detail.token);
        this.test.setStorage(this.detail.token);

        // this.storage.set(this.key,this.detail.token)
        // this.storage.get(this.key).then((val) => {
        //   console.log('Your token is', val);
        // });

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

  // setStorage() {
  //   // set a key/value
  //   this.storage.set(this.key,this.entrada);
  //   this.getStorage();
  // }
  // getStorage() {
  //   // Or to get a key/value pair
  //   this.storage.get(this.key).then((val) => {
  //     console.log('Your token is', val);
  //   });
  // }

}
