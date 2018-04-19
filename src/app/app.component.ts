import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  public ngOnInit() {
    this.form = this.fb.group({
      checkmate: ''
    });
  }

  toggleNestedFormGroup() {
    if (!this.form.get('checkmate').value)
      this.form.removeControl('sub');
  }

}
