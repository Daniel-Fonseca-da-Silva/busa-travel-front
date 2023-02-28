import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [ClienteComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FooterModule,
    HeaderModule,
  ],
  exports: [ClienteComponent],
})
export class ClienteModule {}
