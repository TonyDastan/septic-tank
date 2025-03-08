import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { fadeAnimation, slideInAnimation, staggerAnimation, cardAnimation } from '../shared/animations';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  animations: [fadeAnimation, slideInAnimation, staggerAnimation, cardAnimation]
})
export class ServicesComponent implements OnInit {
  animationState = true;

  services = [
    {
      title: 'System Design',
      description: 'Custom septic system design tailored to your property needs'
    },
    {
      title: 'Installation',
      description: 'Professional installation using industry-best practices'
    },
    {
      title: 'Maintenance',
      description: 'Regular maintenance and inspection services'
    }
  ];

  processSteps = [
    { number: '01', title: 'Consultation', description: 'Initial site assessment and requirements gathering' },
    { number: '02', title: 'Design', description: 'Custom system design based on site conditions' },
    { number: '03', title: 'Permitting', description: 'Handling all necessary permits and approvals' },
    { number: '04', title: 'Installation', description: 'Professional installation with quality materials' }
  ];

  systemTypes = [
    { 
      title: 'Conventional Systems', 
      image: 'conventional.jpg',
      features: ['Standard tank and drain field', 'Suitable for most residential properties', 'Cost-effective solution']
    },
    { 
      title: 'Aerobic Systems', 
      image: 'aerobic.jpg',
      features: ['Oxygen-rich environment', 'Higher treatment level', 'Smaller drain field required']
    },
    { 
      title: 'Mound Systems', 
      image: 'mound.jpg',
      features: ['Elevated drain field', 'Ideal for high water tables', 'Effective in challenging soil conditions']
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Trigger animations on init
    setTimeout(() => {
      this.animationState = false;
    }, 100);
  }
}

