import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  postevent() {
    return this.router.navigate(['/postevent']);
  }
  getticket() {
    return this.router.navigate(['/getticket']);
  }

  subscribe() {
    alert('You successfully subscribe !!!');
  }

}


