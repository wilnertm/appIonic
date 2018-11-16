import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientePage } from './cliente';
import { ComponentsModule } from '../../components/components.module';
import {AutoCompleteModule} from 'primeng/autocomplete';


@NgModule({
  declarations: [
    ClientePage,
  ],
  imports: [
    IonicPageModule.forChild(ClientePage),
    ComponentsModule,
    AutoCompleteModule  
  ],
})
export class ClientePageModule {}
