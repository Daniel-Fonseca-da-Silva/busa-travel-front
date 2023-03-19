import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteFormI } from '../cliente-form/clienteFormI';
import { FuncionarioFormService } from './funcionario-form.service';
import { FuncionarioFormI } from './funcionarioFormI';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css'],
})
export class FuncionarioFormComponent {
  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly funcionarioFormService: FuncionarioFormService
  ) {}

  funcionarioForm!: FormGroup;

  funcionarios$!: FuncionarioFormI;

  ngOnInit(): void {
    this.funcionarioForm = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      age: ['', [Validators.required]],
      driverLicense: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      document: [
        '',
        [Validators.required, Validators.maxLength(5), Validators.minLength(5)],
      ],
      email: ['', [Validators.required]],
      tel: ['', [Validators.required]],
    });
  }

  submitForm() {
    this.funcionarios$ = {
      name: this.funcionarioForm.value.name,
      age: this.funcionarioForm.value.age,
      driverLicense: this.funcionarioForm.value.driverLicense,
      salary: this.funcionarioForm.value.salary,
      document: this.funcionarioForm.value.document,
      email: this.funcionarioForm.value.email,
      tel: this.funcionarioForm.value.tel,
      adm: false,
    };

    this.funcionarioFormService.createFuncionario(this.funcionarios$);
    this.router.navigate(['/funcionario']);
  }

  changeRouter(rota: string) {
    this.router.navigateByUrl(rota);
  }

  clearText() {
    this.funcionarioForm.reset();
  }
}
