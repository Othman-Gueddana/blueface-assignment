import { Component, OnInit, isDevMode } from '@angular/core'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  isDev = isDevMode()
  siteLanguage: string
  siteLocale: string
  languageList = [
    { code: 'en-US', label: 'English' },
    { code: 'fr', label: 'French' },
    { code: 'es', label: 'Spanish' },
  ]

  ngOnInit() {
    this.siteLocale = window.location.pathname.split('/')[1]
    this.siteLanguage = this.languageList.find(
      (f) => f.code === this.siteLocale
    )?.label
    if (!this.siteLanguage) {
      this.onChange(this.languageList[0].code)
    }
  }

  onChange(selectedLangCode: string) {
    window.location.href = `/${selectedLangCode}`
  }
}
