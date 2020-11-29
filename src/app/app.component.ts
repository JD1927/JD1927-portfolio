import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JD1927';

  constructor() {}

  getPortfolioName(): string {
    return `Portfolio: ${this.title}`;
  }
}
