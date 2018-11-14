import { Component } from '@angular/core';

/**
 * Generated class for the NotaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'nota',
  templateUrl: 'nota.html'
})
export class NotaComponent {

  text: string;

  constructor() {
    console.log('Hello NotaComponent Component');
    this.text = 'Hello World';
  }

}
