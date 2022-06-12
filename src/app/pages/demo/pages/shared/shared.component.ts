import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regex, regexErrors } from '@app/Shared';

import { ControlItem } from '@app/models/frontend';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
})
export class SharedComponent implements OnInit {
  form!: FormGroup; //el signo de admiaración '!' forza la inicialización
  isInline!: boolean;
  regexErrors = regexErrors;

  items!: ControlItem[];

  constructor(private fb: FormBuilder) {
    this.isInline = true;
    this.items = [
      { label: 'Uno', value: 1 },
      { label: 'Dos', value: 2 },
      { label: 'Tres', value: 3 },
      { label: 'Cuatro', value: 4 },
      { label: 'Cinco', value: 5 },
    ];
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      input: [
        null,
        {
          updateOn: 'blur', //cuando pierda el foco se dispara
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern(regex.number),
          ],
        },
      ],
      password: [
        null,
        {
          updateOn: 'blur',
          validators: [Validators.required],
        },
      ],

      select: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
      checkboxes: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
    });
  }

  onPatchValue(): void {
    this.form.patchValue({ input: 'David Fonseca' }); //seteé un valor en el input
  }

  onSubmit(): void {
    console.log('Presiono botón submit');
  }

  organizarElemento() {
    this.isInline = !this.isInline;
  }
}
