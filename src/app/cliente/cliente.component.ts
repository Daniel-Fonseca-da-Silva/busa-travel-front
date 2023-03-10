import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private readonly clienteService: ClienteService,
    private readonly router: Router
  ) {}

  clients$!: ClienteI;

  searchForm!: FormGroup;

  panelDeleted: boolean = false;

  ngOnInit(): void {
    this.searchForm = this.initForm();
  }

  onSubmit(): ClienteI | undefined {
    return this.clienteService
      .getClientes(this.searchForm.value.name)
      .subscribe((dado: ClienteI) => (this.clients$ = dado));
  }

  onDelete(): void {
    this.clienteService.deleteClientes(this.clients$.id).subscribe();
    this.panelDeleted = true;
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  clearText() {
    this.searchForm.reset();
  }

  changeRouter(rota: string) {
    this.router.navigateByUrl(rota);
  }
}
