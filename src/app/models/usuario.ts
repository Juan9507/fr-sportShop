// archivo: usuario.interface.ts

export interface Usuario {
  documento: string | null;
  barrio: string | null;
  apellido: string | null;
  contrasenia: string | null;
  correo: string | null;
  telefono: number | null;
  nombre: string | null;
  direccion: string | null;
  edad: number | null;
  tipoDocumento: string | null;
  rol: string | null;
  ciudad: string | null;
  pais: string | null;
}

export interface UsuarioRespuesta {
  mensaje?: string;
  datos?: Usuario;
}
