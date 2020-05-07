import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoresEmHexaService {

  constructor() { }

  listaTudo() : string [] {
    return [
      "#FF6384",
      "#4BC0C0",
      "#FFCE56",
      "#9900FF",
      "#36A2EB",
      "#E7E9ED",
      "#00A86B",
    ];
  }
}
