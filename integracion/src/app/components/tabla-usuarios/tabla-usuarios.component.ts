import { Component, Output } from '@angular/core';
import { personas } from '../../dataSource/personas';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
})
export class TablaUsuariosComponent {

  lPersonas = personas;

}
