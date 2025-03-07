import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  services = [
    { title: 'Septic Tank Installation', description: 'Professional installation of high-quality septic systems.' },
    { title: 'Maintenance & Repair', description: 'Regular maintenance and prompt repair services for all septic systems.' },
    { title: 'Consultation', description: 'Expert advice on septic system design and maintenance.' }
  ];
}
