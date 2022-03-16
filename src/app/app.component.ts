import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public editForm: FormGroup;

  constructor(
    private fb: FormBuilder,) {
    this.editForm = this.fb.group({
      name: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      newPassword: new FormControl('', Validators.required),
      repeatPassword: new FormControl('', Validators.required),
    });
  }

  getErrorMessage() {
    if (this.editForm.hasError('required')) {
      return 'You must enter a value';
    }

    return this.editForm.hasError('email') ? 'Not a valid email' : '';
  }
  onSubmitForm(){
    console.log(12);
    
  }
}
