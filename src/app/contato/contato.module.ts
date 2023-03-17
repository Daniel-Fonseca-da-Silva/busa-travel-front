import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from './contato.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [ContatoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    HeaderModule,
    FooterModule,
  ],
  exports: [ContatoComponent],
})
export class ContatoModule {}
