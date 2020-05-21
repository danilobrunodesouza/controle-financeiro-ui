import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoresEmHexaService {

  constructor() { }

  listaTudo() : string [] {
    return [
      "#36A2EB",
      "#FF6384",
      "#4BC0C0",
      "#FFCE56",
      "#9900FF",
      "#E7E9ED",
      "#00A86B",
    ];
  }
}
