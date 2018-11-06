import { Component } from '@angular/core';
import { TestProvider } from '../../providers/test/test'
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'departamentos',
  templateUrl: 'departamentos.html'
})
export class DepartamentosComponent {


  constructor(
    private test: TestProvider,
    private modal:ModalController
  ) {}

  public departamentos:any[]=[]
  public detail:any={}
  public details:any[]=[]
  public idSelected:string=""
  public selected: any={}

  ngOnInit(): void {
    this.test.generalGet(`/departamento`)
    .then(data =>{
      this.departamentos=data;
      console.log("Departamentos",data);
      
    })
    
  }


  encontrar(id){
    let modal=this.modal.create("detail-departamento" ,{data:this.selected})
    modal.present();
    // this.test.generalGet(`/departamento/${id}`)
      // .then(data =>{
        // this.detail = data
        // console.log("Departamento",data); 
      // })
  }

  crear(){
    this.test.generalPost(`/departamento` ,this.detail)
      .then( data =>{
        this.detail=data;
        console.log("Create",data);
        this.atras()
      })
  }

  atras(){
    location.reload();
  }

  eliminar(id){
    this.test.generalDelete(`/departamento/${id}`, {
      id:this.detail.id
    })
      .then( data =>{
        this.detail=data;
        if(this.detail.status === 400){
          alert('No se puede ejecutar la acción, porque el departamento tiene ciudades ')
        }if(this.detail.status === 200){
        console.log("Borrado", data);
        alert('Borrado exitoso')
        this.atras()
        }
      })
      .catch(error =>{
        if(error){
          alert('Borrado exitoso')
          this.atras()
        }else{
          alert('no se borro el departamento')
        }
      })
  }

  actualizar(id){
    this.test.generalPut(`/departamento/${id}`,{
      nombre:this.detail.nombre
    })
    .then( data =>{
      this.detail=data;
      console.log("Actualización",data);
      this.atras()
      
    })
  }


  

}
