import { Component, OnInit} from '@angular/core';
import { Globals } from './../globals';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  Gate: string;

  constructor(private globals: Globals) { }

  flug = {
    fb_id: 12345678,
    flugnummer: 'LH 001',
    registration: 'DACKL',
    typ: 'A3202',
    ziel: 'MUC',
    sobt: '10:00',
    eobt: '10:25',
    tobt: '10:30',
    status: '',
    n_fb_id: 22222222,
    n_flugnummer: 'KL 1750',
    n_ziel: 'AMS',
    n_sobt: '12:00',
    n_eobt: ''
  };

  bestellungen = [];

  
  ngOnInit() {
    this.Gate = this.globals.g_gate;
  }

  setBBoarding() {
    this.flug.status = 'Begin Boarding!';
  }

  setEBoarding() {
    this.flug.status = 'End-of-Boarding!';
  }

  clearBoarding() {
    this.flug.status = '';
  }


  //Hinzufügen von todo
  addBestellung(typ) {

    var short_bustyp = '';

    if (typ == 'Tenderbus') {
      short_bustyp = 'T'
    }
    else {
      short_bustyp = 'C'
    }


    var d = new Date();
    var n = d.toLocaleTimeString();

    var neuBestellung = {
      id: 1,
      bustyp: short_bustyp,
      busknz: '52',
      bestellt: n.slice(0,-3),
      angenommen: null,
      amgate: null,
      busstatus: 'B'
    };

    this.bestellungen.push(neuBestellung);
  }

}
