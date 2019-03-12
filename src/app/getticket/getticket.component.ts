import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-getticket',
  templateUrl: './getticket.component.html',
  styleUrls: ['./getticket.component.css']
})
export class GetticketComponent implements OnInit {

  constructor(private  router:  Router) { }

  ngOnInit() {
  }

  confirmpayment() {
    return this.router.navigate(['/confirmpayment']);
  }
}
