import { ModalController } from 'ionic-angular';
import { Component, Input } from '@angular/core';
import { TestProvider } from '../../providers/test/test';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'usuarios',
  templateUrl: 'usuarios.html'
})
export class UsuariosComponent {
departamentos:any[]=[]
usuarios: any[]=[]
ciudades:any[]=[]
detail: any={}
details: any={}
public form:boolean;
public selected:any={}

  constructor(
    private test: TestProvider,
    private modal: ModalController
  ) {}

  ngOnInit(): void {
    this.test.generalGet(`/usuario`)
      .then(data =>{
        this.usuarios=data;
        console.log("Usuarios",this.usuarios);
        
      })

      this.test.generalGet(`/ciudad`)
      .then(data =>{
        this.ciudades=data;
        console.log("ciudades",this.ciudades);
        
      })
  }

  encontrar(data){
    let modal=this.modal.create("detail-usuario", {data:this.selected})
    modal.present();
  }

  crear(crearUsuario: NgForm){
    this.test.generalPost(`/usuario` ,this.detail)
      .then(data =>{
        this.detail = data;
        console.log("Datos de creación",data);
        location.reload()
        
      })
  }

  validarEmail(email){
    this.test.generalPost(`/usuario/email`,{
      email:this.detail.email
    })
    .then( data =>{
      this.details=data;
        if(!this.details.email  == this.detail.email ){
          console.log("El usuario se puede crear");
        }if(this.detail.email != null && this.details.email  == this.detail.email){
        alert('El email ya existe')
          this.detail.email = null;
        }
      
      console.log("Validación de email", this.detail);
      
    })
  }

  eliminar(id){
    this.test.generalDelete(`/usuario/${id}`,{
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
