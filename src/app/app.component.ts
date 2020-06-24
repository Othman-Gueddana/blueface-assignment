import { Component, isDevMode } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <div class="lang" *ngIf="!isDev">
      <a href="https://ng-i18n.web.app/">English</a>
      <a href="https://fr-ng-i18n.web.app/">French</a>
      <a href="https://es-ng-i18n.web.app/">Spanish</a>
    </div>
    <app-profile-settings></app-profile-settings>
  `,
})
export class AppComponent {
  isDev = isDevMode()
}
