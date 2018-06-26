import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public signInForm: FormGroup;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  signIn() {
    this.authService.signIn('test@mail.com', '12345678');
  }
}
