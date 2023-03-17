import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContatoService } from './contato.service';
import { ContatoI } from './contatoI';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
})
export class ContatoComponent implements OnInit {
  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly contatoService: ContatoService
  ) {}

  contatoForm!: FormGroup;

  contacts$!: ContatoI;

  ngOnInit(): void {
    this.contatoForm = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(20)]],
    });
  }

  submitForm() {
    this.contacts$ = {
      name: this.contatoForm.value.name,
      email: this.contatoForm.value.email,
      tel: this.contatoForm.value.tel,
      message: this.contatoForm.value.message,
    };
    console.log(this.contacts$);

    this.contatoService.createCliente(this.contacts$);
    this.router.navigate(['/']);
  }

  changeRouter(rota: string) {
    this.router.navigateByUrl(rota);
  }

  clearText() {
    this.contatoForm.reset();
  }
}
