import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public signUpForm: FormGroup;
  constructor(private authService: AuthService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      email: [''],
      password: [''],
      login: ['']
    });
  }
  signUp() {
    console.log(this.signUpForm);
    this.authService.signUp(this.signUpForm.controls['email'].value, this.signUpForm.controls['password'].value);
  }
}
