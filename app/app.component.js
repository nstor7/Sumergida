"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var header_component_1 = require('./header/header.component');
var footer_component_1 = require('./footer/footer.component');
var social_component_1 = require('./social/social.component');
var navegacion_component_1 = require('./navegacion/navegacion.component');
var router_1 = require('@angular/router');
var inicio_component_1 = require('./inicio/inicio.component');
var servicios_component_1 = require('./servicios/servicios.component');
var personal_component_1 = require('./personal/personal.component');
var proyectos_component_1 = require('./proyectos/proyectos.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        router_1.Routes([
            { path: '/', component: inicio_component_1.inicioComponent },
            { path: '/servicios', component: servicios_component_1.serviciosComponent },
            { path: '/personal', component: personal_component_1.personalComponent },
            { path: '/proyectos', component: proyectos_component_1.proyectosComponent },
            { path: '*', component: inicio_component_1.inicioComponent }
        ]),
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.html',
            directives: [header_component_1.headerComponent, footer_component_1.footerComponent, social_component_1.socialComponent, navegacion_component_1.navegacionComponent, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map