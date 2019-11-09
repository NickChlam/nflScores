import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { environment } from '../environments/environment';
import { PickEmComponent } from './pick-em/pick-em.component';

// 3rd party
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';



import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserFormComponent } from './user-form/user-form.component';


import { AuthGuard } from './auth-guard.guard';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';


import { TimesUpComponent } from './times-up/times-up.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UserFormComponent,
    LoginComponent,
    PickEmComponent,
    TimesUpComponent,
    ConfirmationComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'Pending'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule

  ],
  providers: [ AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
