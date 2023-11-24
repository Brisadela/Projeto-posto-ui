import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'posto-ui';

  constructor(private router: Router){}

  showingNavbar(): boolean {
    return this.router.url !== '/login';
  }

}
