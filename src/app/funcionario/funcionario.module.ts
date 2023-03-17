import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioComponent } from './funcionario.component';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FuncionarioComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    HeaderModule,
    FooterModule,
  ],
  exports: [FuncionarioComponent],
})
export class FuncionarioModule {}
