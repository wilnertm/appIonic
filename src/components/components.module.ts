import { NgModule } from '@angular/core';
import { DepartamentosComponent } from './departamentos/departamentos';
import { CiudadesComponent } from './ciudades/ciudades';
import { UsuariosComponent } from './usuarios/usuarios';
import { NavbarComponent } from './navbar/navbar';
import { FooterComponent } from './footer/footer';
import { IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';
import { LoginComponent } from './login/login';
import { CalendarComponent } from './calendar/calendar';
import { NotaComponent } from './nota/nota';
import { TelefonoComponent } from './telefono/telefono';
import { CorreoComponent } from './correo/correo';
import { ClienteComponent } from './cliente/cliente';
import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
    declarations: [
        DepartamentosComponent,
        CiudadesComponent,
        UsuariosComponent,
        NavbarComponent,
        FooterComponent,
        SearchPipe,
        SortPipe,
        LoginComponent,
        CalendarComponent,
        NotaComponent,
        TelefonoComponent,
        CorreoComponent,
        ClienteComponent],
    imports: [
        IonicModule,
        FormsModule,
        FullCalendarModule,
        AutoCompleteModule,
    ],
    exports: [
        DepartamentosComponent,
        CiudadesComponent,
        UsuariosComponent,
        NavbarComponent,
        FooterComponent,
        SearchPipe,
        SortPipe,
        LoginComponent,
        CalendarComponent,
        NotaComponent,
        TelefonoComponent,
        CorreoComponent,
        ClienteComponent]
})
export class ComponentsModule { }
