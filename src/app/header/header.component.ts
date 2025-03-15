import id from '@angular/common/locales/id';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @ViewChild('navbarToggler') navbarToggler!: ElementRef;

  closeMenu(): void {
    // Check if we're in mobile view (navbar-toggler is visible)
    if (window.innerWidth < 992) {
      // Click the navbar toggler to close the menu
      this.navbarToggler.nativeElement.click();
    }
  }
}
