import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { NavBarComponent } from './nav-bar/nav-bar.component'

@NgModule({
  declarations: [AppComponent, ProfileSettingsComponent, NavBarComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
