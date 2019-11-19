import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/auth.service';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   loginForm: FormGroup;


   constructor(public afAuth: AngularFireAuth, private fb: FormBuilder,
              private router: Router,
              private alertify: AlertifyService,
              private auth: AuthService,
              ) { }

  ngOnInit() {
// ?(rht|roberthalf|tcg|officeteam|accounttemps|roberthalflegal|rhmr)\
    this.loginForm = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.).com$')
        // TODO: Create Custom @rht email validator
        ]
      ],
      'password': ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        ]
      ]
  });
  }

  get email() { return this.loginForm.get('email');}
  get password() { return this.loginForm.get('password');}

  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
        .then(value => {
          if (value) {
            this.auth.user.subscribe( data => {
              localStorage.setItem('office' , data.office)
              localStorage.setItem('uid', data.uid)
              this.router.navigate(['/pickem']);
            }, err => {
              this.alertify.error(err)
              // TODO: Add error logging
            })
          }



    }, err => {
      this.alertify.error(err.message);
      this.loginForm.controls.password.reset();
      //TODO add error logging
    }, );


  }
  logout() {
    this.afAuth.auth.signOut();
    localStorage.clear();
  }

}

//TODO: notify user of incorrect credentials reset form.

