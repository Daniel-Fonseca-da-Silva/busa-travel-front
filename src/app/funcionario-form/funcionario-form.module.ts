import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { FuncionarioFormComponent } from './funcionario-form.component';

@NgModule({
  declarations: [FuncionarioFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    HeaderModule,
    FooterModule,
  ],
  exports: [FuncionarioFormComponent],
})
export class FuncionarioFormModule {}
