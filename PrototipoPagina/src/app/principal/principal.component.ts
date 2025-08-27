import { Component } from '@angular/core';

// Importacion desde Angular Material
import {MatButtonModule} from '@angular/material/button';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [

    MatButtonModule,
    RouterModule

  ],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

}
