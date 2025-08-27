import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
// Importacion desde Angular Material
import {MatButtonModule} from '@angular/material/button';

// Importado para la lectura del API
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from "@angular/common";
import { error } from 'console';


@Component({
  selector: 'app-informacion',
  standalone: true,
  imports: [
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    CommonModule,
],
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.css'
})
export class InformacionComponent implements OnInit{

  // private http = inject(HttpClient);
  
  constructor(private http: HttpClient){}
  private baseUrl = 'https://api.jikan.moe/v4'; // API de ejemplo

  //Filtros
  series : any[] = [];
  capituloDisponible: any[] = [];

  //Datos a leido front-usuario
  serieSeleccionada: number | null = null;
  capituloSeleccionado: number | null = null;


  ngOnInit(): void {
    this.cargaSerie();
  }

    // Procedimiento que debería ocurrir
    // 1. Cargo las series - informes del a;o
  cargaSerie(){
    this.http.get<any>(`${this.baseUrl}/anime`)
    .subscribe(res => {
      this.series = res.data;
    });
  }

  // 2. Una vez se alija la serie se elije el capitulo

  getCapituloPorSerie(serieId: number){
    return this.http.get<any>(`${this.baseUrl}/anime/${serieId}/episodes`);
  }

  onSerieChange() {
    if (this.serieSeleccionada) {
        this.getCapituloPorSerie(this.serieSeleccionada).subscribe({
          next: (res) => {
            this.capituloDisponible = res.data;
          }
        })
        // error: (err) =>  {
        //   console.error("error al obtener capitulos", err)
        //   this.capituloDisponible = [];
        // }
    }
  }

  // 3. Muestra el restulado obtenido
  filtroSeriesYCapitulos(){
    if (this.serieSeleccionada && this.capituloSeleccionado)  {
      console.log("serie: ", this.serieSeleccionada);
      console.log("capitulo: ", this.capituloSeleccionado);
    }
  }
}
