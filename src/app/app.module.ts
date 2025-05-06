import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciarSesionComponent } from './components/usuario/iniciarsesion/iniciarsesion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoComponent } from './components/producto/producto.component';

import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { RegistrarmeComponent } from './components/usuario/registro/registrarme/registrarme.component';
import { ComprasComponent } from './components/usuario/compras/compras.component';
import { NotificacionComponent } from './components/notificacion/notificacion.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    InicioComponent,
    HeaderComponent,
    ProductosComponent,
    ProductoComponent,
    RegistrarmeComponent,
    ComprasComponent,
    NotificacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbCollapseModule,
    MdbDropdownModule,
    BrowserAnimationsModule,
    MdbTooltipModule,
    MdbCarouselModule,
    MdbModalModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
