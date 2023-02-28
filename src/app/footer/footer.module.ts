import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  exports: [FooterComponent],
})
export class FooterModule {}
