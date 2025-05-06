import { Component } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { IniciarSesionComponent } from '../usuario/iniciarsesion/iniciarsesion.component';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl:'./header.component.html' ,
  styleUrls: ['./header.component.html']
})
export class HeaderComponent {
  modalRef: MdbModalRef<IniciarSesionComponent> | null = null;

  constructor(private modalService: MdbModalService) {}

  openModal() {
    this.modalRef = this.modalService.open(IniciarSesionComponent)
  }
}
