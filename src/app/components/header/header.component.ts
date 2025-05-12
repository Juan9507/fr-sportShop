import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { IniciarSesionComponent } from '../usuario/iniciarsesion/iniciarsesion.component';
import { UsuarioRespuesta } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl:'./header.component.html' ,
  styleUrls: ['./header.component.html']
})
export class HeaderComponent implements OnInit {

  usuarioLogueado: boolean = false;
  usuarioRepuesta: UsuarioRespuesta | null = null;

  ngOnInit(): void {

    // Suscribirse al observable para recibir actualizaciones en tiempo real
    // y actualizar el estado de autenticación del usuario
    this.usuarioService.obtenerRespuesta$.subscribe((usuarioRepuesta) => {
      this.usuarioRepuesta = usuarioRepuesta;
    });

    this.usuarioService.obtenerAutenticado$.subscribe((autenticado) => {
      this.usuarioLogueado = autenticado ?? false;
    });

    this.obtenerUsuario()
    this.obtenerSiInicioSesion()

  }

  modalRef: MdbModalRef<IniciarSesionComponent> | null = null;

  constructor(private readonly modalService: MdbModalService,
    private readonly usuarioService: UsuarioService
  ) {}

  openModal() {
    this.modalRef = this.modalService.open(IniciarSesionComponent);
  }

  cerrarSesion() {
    this.usuarioService.usuarioAutenticado.next(false);
    this.usuarioService.usuarioRespuesta.next(null);
    this.usuarioLogueado = false;
    this.usuarioRepuesta = null;
    localStorage.setItem("usuarioLogueado", 'false')
    localStorage.setItem("usuarioRespuesta", 'null')
  }

  obtenerSiInicioSesion(){
    this.usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado") ?? 'false');
    console.log("lugueo: ", this.usuarioLogueado)
  }

  obtenerUsuario(){
    this.usuarioRepuesta = JSON.parse(localStorage.getItem("usuarioRespuesta") ?? 'null');
  }
}
