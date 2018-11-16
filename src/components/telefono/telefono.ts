import { Component } from '@angular/core';

/**
 * Generated class for the TelefonoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'telefono',
  templateUrl: 'telefono.html'
})
export class TelefonoComponent {

  text: string;

  constructor() {
    console.log('Hello TelefonoComponent Component');
    this.text = 'Hello World';
  }

}
