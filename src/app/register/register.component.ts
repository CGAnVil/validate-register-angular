import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidationService} from '../services/customValidation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private customValidator: CustomValidationService
  ) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        username: ['', [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
        password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: this.customValidator.MatchPassword('password', 'confirmPassword')
      });
  }

  get registerFormControl(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if(this.registerForm.valid) {
      alert('Đăng ký thành công!!!\n Kq hiển thị trong console');
      console.table(this.registerForm.value);
    }
  }
}
