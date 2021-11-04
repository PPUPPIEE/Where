import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  validatingForm: FormGroup;

  constructor() {this.validatingForm = new FormGroup({
    required: new FormControl(null, Validators.required),
  });}

  ngOnInit(): void {}
  get input() {
    return this.validatingForm.get('required');
  }
}
