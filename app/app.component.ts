import { Component } from '@angular/core'
import {headerComponent} from './header/header.component'
import {footerComponent} from './footer/footer.component'
import {socialComponent} from
'./social/social.component'
import {navegacionComponent} from './navegacion/navegacion.component'
import {Routes, ROUTER_DIRECTIVES} from '@angular/router'
import {inicioComponent} from './inicio/inicio.component'
import {serviciosComponent} from './servicios/servicios.component'
import{personalComponent} from './personal/personal.component'
import{proyectosComponent} from './proyectos/proyectos.component'

@Routes([
    {path: '/', component: inicioComponent},
    {path: '/servicios', component: serviciosComponent},
    {path: '/personal', component: personalComponent},
    {path: '/proyectos', component: proyectosComponent},
    {path: '*', component: inicioComponent}
])
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.html',
  directives: [headerComponent, footerComponent, socialComponent,navegacionComponent, ROUTER_DIRECTIVES]
})

export class AppComponent { }
