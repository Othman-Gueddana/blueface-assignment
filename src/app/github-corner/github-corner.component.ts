import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-github-corner',
  templateUrl: './github-corner.component.html',
  styleUrls: ['./github-corner.component.css'],
})
export class GithubCornerComponent {
  @Input() url = 'https://github.com/batbrain9392'
  @Input() fill = '#24292e'
  @Input() color = '#fff'
}
