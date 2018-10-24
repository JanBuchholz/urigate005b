import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Globals } from './../globals'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, private globals: Globals) { }

  gate: string;
  //pin: number;
  //private g_gate: string;
  buttonStatus = true;


  //Init : Parameter aus URL
  //http://localhost:4200/?gate=A10
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.gate = params['gate'];
      
      if (this.gate == null) {
        this.getGate();

        if (this.gate == 'XXX') {
          this.buttonStatus = true;  
        }
        else {
          this.buttonStatus = false;
        }
      }
      else {
        this.setGate(this.gate);
        this.buttonStatus = false;
      }

    })
  }

  //Setzte Gate aus URL Parameter als Global
  private setGate(gate) {
    this.globals.g_gate = this.gate; 
  }

  private getGate() {
    this.gate = this.globals.g_gate;
  }

 
}



