import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quinto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quinto.component.html',
  styleUrl: './quinto.component.css'
})
export class QuintoComponent {

  nomes:string[] = ['Bruno', 'Maion', 'Neres', 'Orlandini'];
}
