import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  siteLanguage: string
  siteLocale: string
  languageList = [
    { code: 'en-US', label: 'English' },
    { code: 'fr', label: 'French' },
    { code: 'es', label: 'Spanish' },
  ]

  constructor() {}

  ngOnInit() {
    this.siteLocale = window.location.pathname.split('/')[1]
    this.siteLanguage = this.languageList.find(
      (f) => f.code === this.siteLocale
    ).label
  }

  onChange(selectedLang: string) {
    window.location.href = `/${selectedLang}`
  }
}
