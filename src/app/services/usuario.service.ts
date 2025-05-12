import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioRespuesta } from '../models/usuario';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly apiUrl = 'http://localhost:8080/api/usuario/ingresar';

  // Subject para almacenar el estado de autenticación del usuario
  // y permitir emisiones de eventos a los componentes que lo necesiten
  // Se inicializa con null para indicar que no hay un usuario autenticado al principio
  public usuarioRespuesta = new BehaviorSubject<UsuarioRespuesta | null>(null);

  // Observable para que los componentes puedan suscribirse a los cambios de autenticación
  // y recibir actualizaciones en tiempo real
  public obtenerRespuesta$ = this.usuarioRespuesta.asObservable();

  public usuarioAutenticado = new BehaviorSubject<boolean | null>(false);
  public obtenerAutenticado$ = this.usuarioAutenticado.asObservable();

  constructor(private readonly http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  iniciarSesion(correo: string, contrasenia: string): Observable<UsuarioRespuesta> {
    const body = { correo, contrasenia };
    return this.http.post(this.apiUrl, body, this.httpOptions);
  }

}
