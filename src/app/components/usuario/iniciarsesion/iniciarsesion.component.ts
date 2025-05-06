import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import {FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.sass']
})
export class IniciarSesionComponent {
  constructor(public modalRef: MdbModalRef<IniciarSesionComponent>){};

  iniciarSesion = new FormGroup({
    correo: new FormControl(''),
    contrasenia: new FormControl('')
  });

  onSubmit() {
    console.warn(this.iniciarSesion.value);
  }

}
