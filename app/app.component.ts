import { Component } from '@angular/core';
import {headerComponent} from './header/header.component';
import {inicioComponent} from './inicio/inicio.component'
import {footerComponent} from './footer/footer.component'
import {socialComponent} from
'./social/social.component'
import {navegacionComponent} from './navegacion/navegacion.component'

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.html',
directives: [headerComponent, inicioComponent, footerComponent, socialComponent, navegacionComponent]
})

export class AppComponent { }
