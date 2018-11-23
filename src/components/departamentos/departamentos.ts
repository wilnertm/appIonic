import { Component } from '@angular/core';
import { TestProvider } from '../../providers/test/test'
import { ModalController, ToastController } from 'ionic-angular';

class detail {
  nombre: string = "";
}
@Component({
  selector: 'departamentos',
  templateUrl: 'departamentos.html'
})
export class DepartamentosComponent {


  constructor(
    private test: TestProvider,
    private modal: ModalController,
    private toastCtrl: ToastController
  ) { }

  public departamentos: any[] = []
  public resultados: any = {};
  public eliminacion: any = {};
  public details: any[] = []
  public idSelected: string = ""
  public selected: any = {}
  public form: boolean;
  public detail: detail = {
    nombre: "",
  }

  ngOnInit(): void {
    this.test.generalGet(`/departamento`)
      .then(data => {
        this.departamentos = data;
        console.log("Departamentos", data);

      })

  }


  encontrar(id) {
    let modal = this.modal.create("detail-departamento", { data: this.selected })
    modal.present();
  }

  crear() {
    this.test.generalPost(`/departamento`, this.detail)
      .then(data => {
        this.resultados = data;
        console.log(this.resultados, "Create");
        this.departamentos.push(this.resultados);
        this.ngOnInit();
      })
  }

  eliminar(id) {
    this.test.generalDelete(`/departamento/${id}`)
      .then(data => {
        this.eliminacion = data;
        this.ngOnInit();
        console.log(this.eliminacion,"Eliminando");
        if (this.eliminacion.status === 400) {
          this.eliminatedToast();
        } if (this.eliminacion.status === 200) {
          this.updateToast();
        }
      })
      .catch(error => {
        if (error) {
          this.updateToast();
        } else {
          this.eliminatedToast();
        }

      })
  }

  eliminatedToast() {
    let toast = this.toastCtrl.create({
      message: 'No se puede ejecutar la acción, porque el departamento tiene ciudades',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  updateToast() {
    let toast = this.toastCtrl.create({
      message: 'Borrado exitoso',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }


  actualizar(id) {
    this.test.generalPut(`/departamento/${id}`, {
      nombre: this.detail.nombre
    })
      .then(data => {
        this.resultados = data;
        console.log("Actualización", data);
        this.departamentos.push(this.resultados);
      })
  }


}
