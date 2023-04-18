import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {

  form!: FormGroup;
  @Input() address: any;
  @Output() formSubmit = new EventEmitter<any>();

  // get email() {
  //   return this.form.get('email');
  // }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      zipcode:['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
     
    });

    if(this.address) {
      this.form.patchValue(this.address);
    }
  }

  onSubmit() {
    const formData = {
      name: this.form.get('name').value,
      address: this.form.get('address').value,
      zipcode: this.form.get('zipcode').value,
      state: this.form.get('state').value,
      country: this.form.get('country').value,
      phone: this.form.get('phone').value,
      email: this.form.get('email').value
    };
    console.log(formData);
    this.formSubmit.emit(formData);
  }

}