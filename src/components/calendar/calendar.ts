import { Component } from '@angular/core';
import { TestProvider } from '../../providers/test/test';
import { ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'calendar',
    templateUrl: 'calendar.html'
})
export class CalendarComponent {

    //Declaración de variables
    text: string;
    events: any[]
    public detail: any = {}
    public objeto: any = {}
    resultados: any = {}
    resConteo: any = {}
    numConteo: any ;
    // Configuración de las opciones del calendar
    options: any = {
        editable: true,
        selectable: true,
        startEditable: true,
        durationEditable: true,
        resourceEditable: true,
        color: true,
        textColor: true,
        allDay: true,
        //Eventos emitidos por el calendar
        dateClick: (event, jsEvent, view) => {
            if (!event.event) {
                this.crear(event.date);
            }
            else {
                this.encontrar(event.event.id)
                //Pasando el id del evento para el modal del detalle para que se ejecute la función encontrar
            }
        },
        eventClick: (event, jsEvent, view) => {
            this.encontrar(event.event.id)
            //Pasando el id del evento para el modal del detalle para que se ejecute la función encontrar
        },
        eventDrop: (event, delta, revertFunc, jsEvent, ui, view) => {
            console.log("prueba", event.event)
            this.actualizar(event.event.id, event.event)
            //pasando el id del evento y el evento completo al arrastrarlo en el calendario para que se ejecute la función actualizar
        },
        //encabezado del calendario
        header: {
            center: 'mes,semana,dia,notificacion', // botones para cambiar la vista
        },
        //Botones personalizados
        customButtons: {
            notificacion: {
                text: 'custom!',
                click: function () {
                    console.log("Click");
                }
            }
        },
        //funcionalidad de los botones de vista en calendario
        views: {
            semana: {
                type: 'agenda',
                duration: { days: 7 },
                buttonText: 'Semana'
            },
            mes: {
                type: 'basic',
                duration: { months: 1 },
                buttonText: 'Mes'
            },
            dia: {
                type: 'agenda',
                duration: { days: 1 },
                buttonText: 'Día'
            }
        }
    }
    constructor(
        private test: TestProvider,
        private modal: ModalController,
        private storage: Storage
    ) { }
    ngOnInit() {
        this.storage.get('rol').then((val) => {
            let rol = val;
            console.log("ROL: ", rol)
            if (rol == undefined || rol == null) {
                this.test.generalGet(`/actividad`)
                    .then(data => {
                        this.events = data;
                        console.log("Actividades", this.events);
                        //Igualando los datos del get a los eventos del calendario
                    })
            }
            if (rol == 'Administrador') {
                this.test.generalGet(`/actividad`)
                    .then(data => {
                        this.events = data;
                        console.log("Actividades", this.events);
                        //Igualando los datos del get a los eventos del calendario
                    })
            }
            if (rol == 'Usuario') {
                this.storage.get('usuario').then((val) => {
                    let usuario = parseInt(val);
                    this.test.generalPost(`/actividad_usuario`, {
                        // creadoPor: parseInt(localStorage.getItem("usuario"))
                        creadoPor: usuario
                    })
                        .then(data => {
                            this.events = data;
                            console.log("Actividades", this.events);
                            this.conteo();
                            //Igualando los datos del get a los eventos del calendario
                        })
                })
            }
        });
    }
    conteo() {
        this.storage.get('usuario').then((val) => {
            let usuario = parseInt(val)
            this.test.generalPost('/conteo_actividad', {
                creadoPor: usuario
            })
                .then(data => {
                    this.resConteo = data;
                    this.numConteo = this.resConteo[0].count;
                    console.log("Notificaciones", this.numConteo)
                })
        })
    }
    invitados() {
        console.log("creando");
        let modal = this.modal.create("detail-invitados")
        //modal.onDismiss ejecucion de código despues de cerrar el modal
        modal.onDidDismiss(data => {
            // location.reload()
            this.ngOnInit();
            console.log(data);
        });
        modal.present();
    }
    crear(date) {
        console.log("creando");
        let modal = this.modal.create("detail-calendar", { event: date })
        //modal.onDismiss ejecucion de código despues de cerrar el modal
        modal.onDidDismiss(data => {
            // location.reload()
            this.ngOnInit();
            console.log(data);
        });
        modal.present();
    }
    encontrar(id) {
        let modal = this.modal.create("detail-calendar", { data: id })
        modal.onDidDismiss(data => {
            this.ngOnInit();
            // this.events.push(data);
            // location.reload()
            console.log("Modal", data);
        });
        modal.present();
    }
    actualizar(id, event) {
        this.storage.get('usuario').then((val) => {
            this.test.generalPut(`/actividad/${id}`, {
                fechaInicio: event.start,
                fechaFin: event.end,
                actualizadoPor: parseInt(val)
            })
                .then(data => {
                    this.resultados = data;
                    console.log("Actualizando", this.resultados);
                })
        })
    }
}
