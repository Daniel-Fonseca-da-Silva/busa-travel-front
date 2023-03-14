import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreComponent } from './sobre.component';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [SobreComponent],
  imports: [CommonModule, FooterModule, HeaderModule],
  exports: [SobreComponent],
})
export class SobreModule {}
