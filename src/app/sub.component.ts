import { Component, Input } from '@angular/core';
import {
  FormGroup, FormControl, ControlContainer, FormGroupDirective, Validators
} from '@angular/forms';

import { AppComponent } from './app.component';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class SubComponent {

  constructor(private parent: FormGroupDirective) {
  }

  ngOnInit() {
    this.parent.form.addControl('sub', new FormGroup({
      name: new FormControl('', Validators.required),
    }));
  }

}
