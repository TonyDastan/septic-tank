import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { fadeAnimation, slideInAnimation, staggerAnimation, cardAnimation } from '../shared/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeAnimation, slideInAnimation, staggerAnimation, cardAnimation]
})
export class HomeComponent implements OnInit {
  animationState = true;

  services = [
    { title: 'Septic Tank Installation', description: 'Professional installation of high-quality septic systems.' },
    { title: 'Maintenance & Repair', description: 'Regular maintenance and prompt repair services for all septic systems.' },
    { title: 'Consultation', description: 'Expert advice on septic system design and maintenance.' }
  ];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.animationState = false;
    }, 100);
  }
}
