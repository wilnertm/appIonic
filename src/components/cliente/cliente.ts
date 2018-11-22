import { TestProvider } from './../../providers/test/test';
import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'cliente',
  templateUrl: 'cliente.html'
})

export class ClienteComponent {

  @Output() typeChanged = new EventEmitter<any[]>();

  public form: boolean;
  text: string;
  public resultados: any[] = [];
  public detail: any = {};
  public ciudades: any[] = []
  details: any = {}
  public correos: any[] = []
  public telefonos: any[] = []
  public email: any;
  public telefono: any;
  public agregarCorreo: false;
  public agregarTelefono: false;
  public prueba: any;
  clientes: any[] = []
  crearCliente: any;

  constructor(
    private test: TestProvider
  ) { }

  ngOnInit(): void {
    this.test.generalGet('/ciudad')
      .then(data => {
        this.ciudades = data;
      })
    this.test.generalGet('/cliente')
      .then(data => {
        this.clientes = data;
      })
  }

  crear(crearCliente: NgForm) {
    console.log("Detalle", this.detail);
    console.log("Correos", this.correos);
    this.test.generalPost('/cliente', {
      nombre: this.detail.nombre,
      cn: this.detail.cn,
      id_ciudad: this.detail.id_ciudad,
      nit: this.detail.nit,
      correos: this.correos,
      telefonos: this.telefonos
    })
      .then(data => {
        this.resultados = data;
        console.log("Post", this.resultados);
        // this.typeChanged.emit(data);
        this.emit();
        this.agregarCorreo = false;
        this.agregarTelefono = false;
        this.correos = null;
        this.telefonos = null;
      })
  }

  emit() {
    this.typeChanged.emit(this.resultados);
  }

  validarCn(cn) {
    this.test.generalPost(`/cliente/cn`, {
      cn: this.detail.cn
    })
      .then(data => {
        this.details = data;
        if (!this.details.cn == this.detail.cn) {
          console.log("El cliente se puede crear");
        } if (this.detail.cn != null && this.details.cn == this.detail.cn) {
          alert('El código ya existe')
          this.detail.cn = "";
        }

        console.log("Validación de Código", this.detail);

      })
  }
  addEmail(email) {
    this.correos.push(this.email)
    console.log("correos", this.correos);
    this.email = null;
  }

  dropEmail(email) {
    this.correos.splice(this.email, 1);
    console.log(this.correos, "Drop Email");
  }


  addPhone(telefono) {
    this.telefonos.push(this.telefono)
    console.log("Telefonos", this.telefonos);
    this.telefono = null;
  }

  dropPhone(telefono) {
    this.telefonos.splice(this.telefono, 1);
    console.log(this.telefonos, "Drop Phone");
  }
}
