import { Component } from '@angular/core';
import { TestProvider } from '../../providers/test/test';
import { NgForm } from '@angular/forms'; 
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'ciudades',
  templateUrl: 'ciudades.html'
})
export class CiudadesComponent {

public ciudades:any[]=[]
public departamentos:any[]=[]
public detail:any={}
public selected:any={}
public form:boolean;

  constructor(
    private test:TestProvider,
    private modal:ModalController
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
      this.detail = data;
      console.log("Datos",data);
      location.reload()
      
    })
}

encontrar(id){
  let modal=this.modal.create("detail-ciudad", {data:this.selected})
  modal.present();
}

eliminar(id){
  this.test.generalDelete(`/ciudad/${id}`,{
    id:this.detail.id
  })
    .then( data =>{
      this.detail=data;
      if(this.detail.status === 400){
        alert('No se puede ejecutar la acción, porque la ciudad tiene usuarios ')
      }if(this.detail.status === 200){
      console.log("Borrado", data);
      alert('Borrado exitoso')
      location.reload()
      }
    })
    .catch(error =>{
      if(error){
        alert('Borrado exitoso')
        location.reload()
      }else{
        alert('no se borro el departamento')
      }
    })
    
}




}
