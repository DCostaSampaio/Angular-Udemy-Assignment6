import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomVal } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Assignment-6';
  projectForm: FormGroup;

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, CustomVal.invalidName, CustomVal.asyncInvalidName]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('critical')
    });
  }

  onSave() {
    console.log(this.projectForm.value);
  }


}
