import { Component } from '@angular/core';
import { TestProvider } from '../../providers/test/test';
import { ModalController } from 'ionic-angular';

@Component({
    selector: 'calendar',
    templateUrl: 'calendar.html'
})
export class CalendarComponent {

text: string;
events:any []
public detail:any ={}
public objeto:any ={}
options: any={
    editable: true,
    selectable:true, 
    startEditable:true,
    durationEditable:true,
    resourceEditable:true,
    color:true,
    textColor:true,
    allDay: true,
    // eventDrop:( event , delta , revertFunc , jsEvent , ui , view ) => {

    // },
    eventClick:(event, jsEvent, view)=>{
        console.log("Detalle",event.event);
        // this.findById(detail.event.id,detail.event);
        this.encontrar(event.event)
    },
    eventDrop:(event, jsEvent, ui, end)=>{
        console.log("prueba",event.event)
        this.actualizar(event.event.id,event.event)
    }
}
selectable: any={}
selected: any ={}
resultados: any={}

constructor(
    private test:TestProvider,
    private modal:ModalController,
) {}

ngOnInit() {
    
    this.test.generalGet(`/actividad`)
    .then(data=>{
        this.events=data;
    })
}






crear(){
    this.test.generalPost(`/actividad`).then(events => {this.events = events;});
        // .then( data =>{
        //     this.detail= data;
        //     console.log("Datos de creación", data);
            
        // })
}

encontrar(event){
    let modal=this.modal.create("detail-calendar", {data:event})
    modal.present();
}

actualizar(id,event){
    this.test.generalPut(`/actividad/${id}`, {fechaInicio:event.start,fechaFin:event.end})
        .then( data =>{
            this.resultados= data;
            console.log("Actualizando", this.resultados);
            
        })
}

findById(id,event){
    this.test.generalGet(`/actividad/${id}`, id)
        .then( data =>{
            this.objeto = data;
            console.log("Selected", this.objeto);
            
        })
}

}
