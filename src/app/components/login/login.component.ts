import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @ViewChild('userForm') userForm:NgForm | undefined;

  constructor(private router:Router)
  {

  }

  isPasswordVisible: boolean = false; // Property to track password visibility

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible; // Toggle the visibility
  }

  onSubmit(form:NgForm)
  {
    console.log(this.userForm)
  }

  redirectToResetPassword()
  {
    this.router.navigate(['/reset-password'])
  }

  redirectToSignup()
  {
    this.router.navigate(['/sign-up'])
  }

}
