import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from './cliente.service';
import { ClienteI } from './clienteI';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent implements OnInit {
  constructor(
    private readonly fb: FormBuilder,
    private readonly clienteService: ClienteService
  ) {}

  clients$!: ClienteI;

  searchForm!: FormGroup;

  ngOnInit(): void {
    this.searchForm = this.initForm();
  }

  onSubmit(): ClienteI | undefined {
    return this.clienteService
      .getClientes(this.searchForm.value.name)
      .subscribe((dado: ClienteI) => (this.clients$ = dado));
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
}
