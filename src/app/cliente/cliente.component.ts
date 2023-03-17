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

  clientsToUpdate$!: ClienteI;

  searchForm!: FormGroup;

  clientsFormList!: FormGroup;

  showTableOfClient: boolean = false;

  showPanelEdit: boolean = false;

  displayStyle = 'none';

  ngOnInit(): void {
    this.searchForm = this.initForm();
  }

  initFormClients(): FormGroup {
    return this.fb.group({
      name: [
        this.clients$.name,
        [Validators.required, Validators.minLength(5)],
      ],
      age: [this.clients$.age, [Validators.required]],
      document: [
        this.clients$.document,
        [Validators.required, Validators.maxLength(5), Validators.minLength(5)],
      ],
      email: [this.clients$.email, [Validators.required]],
      tel: [this.clients$.tel, [Validators.required]],
      amount: [this.clients$.amount, [Validators.required]],
    });
  }

  callFormUpdate(): void {
    this.showTableOfClient = false;
    this.showPanelEdit = true;
    this.clientsFormList = this.initFormClients();
  }

  onSubmitUpdate(): void {
    this.clientsToUpdate$ = {
      name: this.clientsFormList.value.name,
      age: this.clientsFormList.value.age,
      document: this.clientsFormList.value.document,
      email: this.clientsFormList.value.email,
      tel: this.clientsFormList.value.tel,
      amount: this.clientsFormList.value.amount,
    };
    this.clienteService
      .updateCliente(this.clients$.id!, this.clientsToUpdate$)
      .subscribe();
    this.showPanelEdit = false;
  }

  onSubmit(): ClienteI {
    this.clients$ = this.clienteService
      .getClientes(this.searchForm.value.name)
      .subscribe((dado: ClienteI) => (this.clients$ = dado));
    this.showPanelEdit = false;
    this.showTableOfClient = true;
    return this.clients$;
  }

  onDelete(): void {
    this.clienteService.deleteClientes(this.clients$.id!).subscribe();
    this.displayStyle = 'none';
    this.showTableOfClient = false;
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  clearText(): void {
    this.searchForm.reset();
    this.displayStyle = 'none';
    this.showTableOfClient = false;
    this.showPanelEdit = false;
  }

  clearTextUpdate(): void {
    this.clientsFormList.reset();
  }

  changeRouter(rota: string): void {
    this.router.navigateByUrl(rota);
  }

  openPopup(): void {
    this.displayStyle = 'block';
  }
  closePopup(): void {
    this.displayStyle = 'none';
  }
}
