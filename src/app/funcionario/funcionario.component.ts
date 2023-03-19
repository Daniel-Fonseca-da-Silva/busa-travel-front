import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FuncionarioService } from './funcionario.service';
import { FuncionarioI } from './funcionarioI';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css'],
})
export class FuncionarioComponent implements OnInit {
  constructor(
    private readonly fb: FormBuilder,
    private readonly funcionarioService: FuncionarioService,
    private readonly router: Router
  ) {}

  funcionarios$!: FuncionarioI;

  funcionariosToUpdate$!: FuncionarioI;

  searchForm!: FormGroup;

  funcionarioFormList!: FormGroup;

  showTableOfDriver: boolean = false;

  showPanelEdit: boolean = false;

  displayStyle = 'none';

  ngOnInit(): void {
    this.searchForm = this.initForm();
  }

  initFormClients(): FormGroup {
    return this.fb.group({
      name: [
        this.funcionarios$.name,
        [Validators.required, Validators.minLength(5)],
      ],
      age: [this.funcionarios$.age, [Validators.required]],
      driverLicense: [this.funcionarios$.driverLicense, [Validators.required]],
      salary: [this.funcionarios$.salary, [Validators.required]],
      document: [
        this.funcionarios$.document,
        [Validators.required, Validators.maxLength(5), Validators.minLength(5)],
      ],
      email: [this.funcionarios$.email, [Validators.required]],
      tel: [this.funcionarios$.tel, [Validators.required]],
    });
  }

  callFormUpdate(): void {
    this.showTableOfDriver = false;
    this.showPanelEdit = true;
    this.funcionarioFormList = this.initFormClients();
  }

  onSubmitUpdate(): void {
    this.funcionariosToUpdate$ = {
      name: this.funcionarioFormList.value.name,
      age: this.funcionarioFormList.value.age,
      driverLicense: this.funcionarioFormList.value.driverLicense,
      salary: this.funcionarioFormList.value.salary,
      document: this.funcionarioFormList.value.document,
      email: this.funcionarioFormList.value.email,
      tel: this.funcionarioFormList.value.tel,
    };
    this.funcionarioService
      .updateFuncionario(this.funcionarios$.id!, this.funcionariosToUpdate$)
      .subscribe();
    this.showPanelEdit = false;
  }

  onSubmit(): FuncionarioI {
    this.funcionarios$ = this.funcionarioService
      .getFuncionario(this.searchForm.value.name)
      .subscribe((dado: FuncionarioI) => (this.funcionarios$ = dado));
    this.showPanelEdit = false;
    this.showTableOfDriver = true;
    return this.funcionarios$;
  }

  onDelete(): void {
    this.funcionarioService
      .deleteFuncionario(this.funcionarios$.id!)
      .subscribe();
    this.displayStyle = 'none';
    this.showTableOfDriver = false;
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  clearText(): void {
    this.searchForm.reset();
    this.displayStyle = 'none';
    this.showTableOfDriver = false;
    this.showPanelEdit = false;
  }

  clearTextUpdate(): void {
    this.funcionarioFormList.reset();
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
