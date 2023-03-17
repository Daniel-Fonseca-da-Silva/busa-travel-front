import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteModule } from './cliente/cliente.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteFormModule } from './cliente-form/cliente-form.module';
import { HttpClientModule } from '@angular/common/http';
import { SobreModule } from './sobre/sobre.module';
import { SobreComponent } from './sobre/sobre.component';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { ContatoModule } from './contato/contato.module';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { FuncionarioFormModule } from './funcionario-form/funcionario-form.module';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'funcionario', component: FuncionarioComponent },
  { path: 'cliente-form', component: ClienteFormComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'funcionario-form', component: FuncionarioFormComponent },
];
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    HeaderModule,
    ClienteModule,
    FooterModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SobreModule,
    ClienteFormModule,
    ContatoModule,
    FuncionarioModule,
    HttpClientModule,
    FuncionarioFormModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
