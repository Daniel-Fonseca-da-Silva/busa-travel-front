import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteFormService } from './cliente-form.service';
import { ClienteFormI } from './clienteFormI';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css'],
})
export class ClienteFormComponent implements OnInit {
  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly clienteFormService: ClienteFormService
  ) {}

  clienteForm!: FormGroup;

  clients$!: ClienteFormI;

  ngOnInit(): void {
    this.clienteForm = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(10)]],
      age: ['', [Validators.required, Validators.minLength(2)]],
      document: ['', [Validators.required, Validators.maxLength(5)]],
      amount: ['', [Validators.required]],
    });
  }

  submitForm() {
    this.clients$ = {
      name: this.clienteForm.value.name,
      age: this.clienteForm.value.age,
      document: this.clienteForm.value.document,
      amount: this.clienteForm.value.amount,
    };

    this.clienteFormService.createCliente(this.clients$);
    this.router.navigate(['/cliente']);
  }

  changeRouter(rota: string) {
    this.router.navigateByUrl(rota);
  }

  clearText() {
    this.clienteForm.reset();
  }
}
