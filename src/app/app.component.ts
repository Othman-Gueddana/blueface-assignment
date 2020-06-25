import { Component, isDevMode } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <app-nav-bar *ngIf="!isDev"></app-nav-bar>
    <app-profile-settings></app-profile-settings>
  `,
})
export class AppComponent {
  isDev = isDevMode()
}
