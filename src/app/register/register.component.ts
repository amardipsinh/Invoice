import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { User } from 'src/app/interfaces/auth';
// import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  }, {
    Validators: this.passwordMatchValidator
  })

  
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  get fullName() {
    return this.registerForm.controls['fullName'];
  }

  get email() {
    return this.registerForm.controls['email'];
  }

  get password() {
    return this.registerForm.controls['password'];
  }

  get confirmPassword() {
    return this.registerForm.controls['confirmPassword'];
  }
 
  passwordMatchValidator(control: AbstractControl){
    return control.get("password")?.value === control.get("confirmPassword") ? null :{mismatch:true}
  }
  
  submitDetails() {
  //   const postData = { ...this.registerForm.value };
  //   delete postData.confirmPassword;
  //   this.authService.registerUser(postData as User).subscribe(
  //     response => {
  //       console.log(response);
  //       this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Register successfully' });
  //       this.router.navigate(['login'])
  //     },
  //     error => {
  //       this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
  //     }
  //   )
  }

}