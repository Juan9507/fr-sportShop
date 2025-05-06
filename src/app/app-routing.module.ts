import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoComponent } from './components/producto/producto.component';
import { RegistrarmeComponent } from './components/usuario/registro/registrarme/registrarme.component';
import { ComprasComponent } from './components/usuario/compras/compras.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'producto', component: ProductoComponent},
  {path: 'registro', component: RegistrarmeComponent},
  {path: 'compras', component: ComprasComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
