import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-latestevents',
  templateUrl: './latestevents.component.html',
  styleUrls: ['./latestevents.component.css']
})
export class LatesteventsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getticket() {
    return this.router.navigate(['/getticket']);
  }

  subscribe() {
    alert('You successfully subscribe !!!');
  }
}
