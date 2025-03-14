import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { fadeAnimation, slideInAnimation, staggerAnimation, cardAnimation } from '../shared/animations';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [fadeAnimation, slideInAnimation, staggerAnimation, cardAnimation]
})
export class ContactComponent implements OnInit {
  animationState = true;

  contactInfo = {
    address: 'Kigamboni-Ferry, Dar es Salaam',
    phone: '+255 747 143 139',
    email: 'info@monacoseptictanks.co.tz',
    workingHours: 'Jumatatu - Jumamosi: 9:00 - 17:00'
  };

  formData: any = {};

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.animationState = false;
    }, 100);
  }

  onSubmit() {
    throw new Error('Method not implemented.');
  }
}
