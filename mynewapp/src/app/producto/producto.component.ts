import { SelfDecorator } from "@angular/core";
import { Imagen } from "../imagen/imagen.component";
import { Sede } from "../sede/sede.component";
export class Producto
{
  id: number;
  nombre: string;
  descripcion: string;
  costo: number;
  disponibilidad: number;
  categoria: string;


  constructor
  (
    id: number,
    nombre: string,
    descripcion: string,
    costo: number,
    disponibilidad: number,
    categoria: string)
    {
      this.id = id;
      this.nombre= nombre;
      this.descripcion = descripcion;
      this.costo = costo;
      this.disponibilidad = disponibilidad;
      this.categoria = categoria;

    }





}
