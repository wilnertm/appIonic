import { Component } from '@angular/core';

/**
 * Generated class for the ClienteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cliente',
  templateUrl: 'cliente.html'
})
export class ClienteComponent {

  text: string;

  constructor() {
    console.log('Hello ClienteComponent Component');
    this.text = 'Hello World';
  }

}
