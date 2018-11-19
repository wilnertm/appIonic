import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailCalendarPage } from './detail-calendar';
import {CalendarModule} from 'primeng/calendar';
import {AutoCompleteModule} from 'primeng/autocomplete';




@NgModule({
  declarations: [
    DetailCalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailCalendarPage),
    ComponentsModule,
    CalendarModule,
    AutoCompleteModule,
  ],
})
export class DetailCalendarPageModule {}
