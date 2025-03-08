import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { fadeAnimation, slideInAnimation, staggerAnimation, cardAnimation } from '../shared/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [fadeAnimation, slideInAnimation, staggerAnimation, cardAnimation]
})
export class AboutComponent implements OnInit {
  animationState = true;

  features = [
    {
      icon: 'fa-tools',
      title: 'Modern Equipment',
      description: 'Using the latest construction technology'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Safety First',
      description: 'Prioritizing environmental and health safety'
    },
    {
      icon: 'fa-clock',
      title: 'Timely Delivery',
      description: 'Completing projects on schedule'
    },
    {
      icon: 'fa-hand-holding-usd',
      title: 'Competitive Pricing',
      description: 'Quality service at affordable rates'
    },
    {
      icon: 'fa-users',
      title: 'Expert Team',
      description: 'Skilled and experienced professionals'
    },
    {
      icon: 'fa-headset',
      title: '24/7 Support',
      description: 'Always available for assistance'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.animationState = false;
    }, 100);
  }
}
