import {Routes, RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {SignupComponent} from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';

import {MatFormFieldModule} from '@angular/material/form-field';
import { ContactComponent } from './contact/contact.component';
import { PosteventComponent } from './postevent/postevent.component';
import { YoureventsComponent } from './yourevents/yourevents.component';
import { BookedeventsComponent } from './bookedevents/bookedevents.component';
import { LatesteventsComponent } from './latestevents/latestevents.component';
import { GetticketComponent } from './getticket/getticket.component';
import { ConfirmpaymentComponent } from './confirmpayment/confirmpayment.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { HttpClientModule } from '@angular/common/http';
import { HelloComponent } from './hello/hello.component';
import { MyAppComponent } from './my-app/my-app.component';

const routes: Routes = [
  { path: 'bookedevents', component: BookedeventsComponent},
  { path: 'yourevents', component: YoureventsComponent},
  { path: 'latestevents', component: LatesteventsComponent},
  { path: 'postevent', component: PosteventComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'getticket', component: GetticketComponent},
  {path: 'confirmpayment' , component: ConfirmpaymentComponent},
  {path: 'forgotpassword' , component: ForgotpasswordComponent},
  { path: '*', component: HomeComponent},
  { path: '', component: HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    ProfileComponent,
    ContactComponent,
    PosteventComponent,
    YoureventsComponent,
    BookedeventsComponent,
    LatesteventsComponent,
    GetticketComponent,
    ConfirmpaymentComponent,
    ForgotpasswordComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatDialogModule,
    SlimLoadingBarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
