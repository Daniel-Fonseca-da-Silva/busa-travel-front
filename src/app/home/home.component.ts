import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee, faEye, faCar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private readonly router: Router) {}

  btnClick = () => this.router.navigateByUrl('/contato');

  faCoffee = faCoffee;
  faEye = faEye;
  faCar = faCar;
}
