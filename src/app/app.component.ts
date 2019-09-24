import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
    }    
  `]
})
export class AppComponent {
  title = 'Sfp';

  constructor() { }
}
