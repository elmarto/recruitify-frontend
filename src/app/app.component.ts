import { Component, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  url = '';

  constructor(
    private router: Router
  ) {
    router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((evt: any) => {
        this.url = evt.url;
      });
  }
}
