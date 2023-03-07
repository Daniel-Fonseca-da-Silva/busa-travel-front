import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClienteFormComponent } from './cliente-form.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ClienteFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    HeaderModule,
    FooterModule,
  ],
  exports: [ClienteFormComponent],
})
export class ClienteFormModule {}
