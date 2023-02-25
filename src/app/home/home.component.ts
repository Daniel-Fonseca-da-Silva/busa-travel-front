import { Component } from '@angular/core';
import { faCoffee, faEye, faCar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  faCoffee = faCoffee;
  faEye = faEye;
  faCar = faCar;
}
