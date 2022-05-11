
import { SelfDecorator } from "@angular/core";
export class Sede
{

  direccion: String ;
	/**
	 * Nombre de la sede
	 */
   nombre: String ;
	/**
	 * Ciudad a la que pertenece la sede
	 */
   ciudad: string ;
   constructor( direccion: String ,

     nombre: String ,

     ciudad: string )
     {
       this.ciudad = ciudad;
       this.direccion = direccion;
       this.nombre = nombre;
     }



}
