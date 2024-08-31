import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
})
export class BotonComponent {
  @Input()
  labelBoton: string = "Agregar Persona";
}
