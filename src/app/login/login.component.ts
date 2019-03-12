import {Component, OnInit} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {validate} from 'codelyzer/walkerFactory/walkerFn';
import {Router} from '@angular/router';
import {isBoolean} from 'util';
import {isLineBreak} from 'codelyzer/angular/sourceMappingVisitor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userList;

  constructor (private  router: Router ) {}

  formdata;
  userid;
  password;

  ngOnInit() {
    this.formdata = new FormGroup({
      userid: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')
      ])),
      password: new FormControl('', this.passwordvalidation)
    });

  }

  onClickSubmit(data) {
    this.userid = data.userid;
    this.password = data.password;
    console.log(this.userid);
    console.log(this.password);
  }

  passwordvalidation(formcontrol) {
    if (formcontrol.value.length <  5) {
      return {'passwd': true};
  }
  }
}
