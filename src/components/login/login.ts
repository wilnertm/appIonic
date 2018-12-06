import { Component } from '@angular/core';
import { TestProvider } from '../../providers/test/test';
import { NavController, ToastController } from 'ionic-angular';


@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {

  public detail: any = {}
  text: string;
  key: string = "token";
  rol: string = "rol";

  constructor(
    private test: TestProvider,
    public navCtrl: NavController,
    private toastCtrl: ToastController,
  ) { }

  login() {
    this.test.login(`/login`, this.detail)
      .then(data => {
        this.detail = data;
        if (this.detail.status === 400) {
          this.userNotFoundToast();
          return;
        }
        if (this.detail.status === 403) {
          this.inactiveToast();
          return;
        }
        else{
          console.log("Detalle De Autenticación", this.detail)
          console.log("Token", this.detail.token);
          this.test.setStorage(this.detail.token);
          this.test.setRol(this.detail.rol.descripcion);
          this.test.setUsuario(this.detail.identificador);
          this.test.setName(this.detail.nombres);
          localStorage.setItem("token", this.detail.token);
          // localStorage.setItem("usuario", this.detail.identificador);
          // localStorage.setItem("nombreCompleto", this.detail.nombres);
          sessionStorage.setItem("rol", this.detail.rol.descripcion);
          location.replace("/#/usuario")
          console.log("Detalle", this.detail);
        }
      })
      .catch(err => {
        console.log("Error", err)
      })
  }
  inactiveToast() {
    let toast = this.toastCtrl.create({
      message: 'Usuario bloqueado comunicate con el administrador',
      duration: 5000,
      position: 'top'
    });
    toast.present();
  }
  userNotFoundToast() {
    let toast = this.toastCtrl.create({
      message: 'Usuario y/o contraseña incorrectos.',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }


}
