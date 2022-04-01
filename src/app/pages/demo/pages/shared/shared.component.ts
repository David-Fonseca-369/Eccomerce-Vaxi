import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
})
export class SharedComponent implements OnInit {
  form!: FormGroup; //el signo de admiaración '!' forza la inicialización

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      input: [null],
    });
  }

  onPatchValue(): void {
    this.form.patchValue({ input: 'David Fonseca' }); //seteé un valor en el input
  }

  onSubmit(): void {
    console.log('Presiono botón submit');
  }
}
