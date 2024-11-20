import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {

  @ViewChild('userForm') userForm:NgForm | undefined;


  onSubmit(form:NgForm)
  {
    console.log(this.userForm)
  }

  constructor(private router:Router)
  {

  }

  backToHome()
  {
    this.router.navigate(['/login'])
  }

}
