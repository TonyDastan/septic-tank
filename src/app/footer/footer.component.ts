import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  contactInfo = {
    address: 'Kigamboni-Ferry, Dar es Salaam',
    phone: '255 747 143 139',
    email: 'info@monacoseptictanks.co.tz',
    workingHours: 'Jumatatu - Jumamosi: 9:00 - 17:00'
  };

}
