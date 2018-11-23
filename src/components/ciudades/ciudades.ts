import { Component } from '@angular/core';
import { TestProvider } from '../../providers/test/test';
import { NgForm } from '@angular/forms'; 
import { ModalController, ToastController } from 'ionic-angular';

class detail  {
  nombre: string = '';
  id_departamento: number = 0;
}
@Component({
  selector: 'ciudades',
  templateUrl: 'ciudades.html'
})
export class CiudadesComponent {

public ciudades:any[]=[]
public departamentos:any[]=[]
public detail: detail ={
  nombre: "",
  id_departamento: 0,
}
public selected:any={}
public form:boolean;
resultados: any = {};
eliminacion: any = {};

  constructor(
    private test:TestProvider,
    private modal:ModalController,
    private toastCtrl: ToastController
  ) {}

ngOnInit(): void {
  this.test.generalGet(`/ciudad`)
    .then( data =>{
      this.ciudades=data;
      console.log("Ciudades",data);
      
    })

    this.test.generalGet('/departamento')
    .then(data =>{
      this.departamentos=data;
      console.log("Departamentos",data);
      
    })
    
}

crear(crearCiudad: NgForm){
  this.test.generalPost(`/ciudad`,this.detail)
    .then( data =>{
      this.resultados = data;
      console.log("Datos",this.resultados);
      this.ciudades.push(this.resultados)
      console.log(this.ciudades,"Objeto Ciudad")
      this.presentToast();
      this.ngOnInit();
    })
}

presentToast() {
  let toast = this.toastCtrl.create({
    message: 'Ciudad Creada Exitosamente',
    duration: 3000,
    position: 'top'
  });
  toast.present();

}

eliminatedToast() {
  let toasto = this.toastCtrl.create({
    message: 'La ciudad fue eliminada',
    duration: 3000,
    position: 'top'
  });
  toasto.present();
}

advertisementToast() {
  let toasto = this.toastCtrl.create({
    message: 'No se puede ejecutar la acción, porque la ciudad tiene usuarios ',
    duration: 3000,
    position: 'top'
  });
  toasto.present();
}

encontrar(id){
  let modal=this.modal.create("detail-ciudad", {data:this.selected})
  modal.present();
}

eliminar(id){
  this.test.generalDelete(`/ciudad/${id}`
  )
    .then( data =>{
      this.eliminacion=data;
      if(this.eliminacion.status === 400){
        // alert('No se puede ejecutar la acción, porque la ciudad tiene usuarios ')
        this.advertisementToast()
      }if(this.eliminacion.status === 200){
      console.log("Borrado", data);
      // alert('Borrado exitoso')
        this.eliminatedToast();
      location.reload()
      }
    })
    .catch(error =>{
      if(error){
        this.eliminatedToast();
        // location.reload()
        this.ngOnInit();
      }else{
        // alert('no se borro el departamento')
        this.advertisementToast()
      }
    })
    
}




}
