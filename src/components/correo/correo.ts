import { Component } from '@angular/core';

/**
 * Generated class for the CorreoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'correo',
  templateUrl: 'correo.html'
})
export class CorreoComponent {

  text: string;

  constructor() {
    console.log('Hello CorreoComponent Component');
    this.text = 'Hello World';
  }

}
