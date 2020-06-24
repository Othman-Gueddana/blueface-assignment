import { Component, OnInit } from '@angular/core'
import { IProfile, ProfileService } from '../profile-service/profile.service'

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css'],
})
export class ProfileSettingsComponent implements OnInit {
  public title = 'Profile'
  public user: IProfile
  public isLoading: boolean

  constructor(private profile: ProfileService) {}

  private async getProfile() {
    let tryNum = 0
    while (!this.user) {
      tryNum++
      console.log('try', tryNum)
      try {
        this.user = await this.profile.getProfileUser()
      } catch (error) {
        console.log(error.error)
      }
    }
    console.log('success')
  }

  async ngOnInit() {
    this.isLoading = true
    await this.getProfile()
    this.isLoading = false
  }

  saveProfile() {}
}
