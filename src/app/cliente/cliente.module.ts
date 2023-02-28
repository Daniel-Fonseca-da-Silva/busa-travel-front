import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClienteComponent],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  exports: [ClienteComponent],
})
export class ClienteModule {}
