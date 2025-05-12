import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import {FormControl, FormGroup} from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import { UsuarioRespuesta } from '../../../models/usuario';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.sass']
})
export class IniciarSesionComponent {


  constructor(public modalRef: MdbModalRef<IniciarSesionComponent>,
    private readonly usuarioService: UsuarioService
  ){};

  iniciarSesion = new FormGroup({
    correo: new FormControl(''),
    contrasenia: new FormControl('')
  });

  onSubmit() {
    this.usuarioService.iniciarSesion(
      this.iniciarSesion.value.correo ?? '', this.iniciarSesion.value.contrasenia ?? ''
    ).subscribe({
      next: (response) => {
        /*console.log('Inicio de sesión exitoso', response);
        this.usuarioService.usuarioAutenticado.next(true);
        this.usuarioService.usuarioRespuesta.next(response);
        this.modalRef.close();*/
        this.validarSesion(response)
      },
      error: (error) => {
        console.error('Error al iniciar sesión', error);
      }
    })
  }

  validarSesion(respuesta: UsuarioRespuesta) {
    if(respuesta.datos === null) {
      alert(respuesta.mensaje)
    }else{
      this.usuarioService.usuarioAutenticado.next(true);
      this.usuarioService.usuarioRespuesta.next(respuesta);
      localStorage.setItem("usuarioLogueado", JSON.stringify(true));
      localStorage.setItem("usuarioRespuesta", JSON.stringify(respuesta));
      alert(respuesta.mensaje)
      this.modalRef.close()
    }

  }

}
