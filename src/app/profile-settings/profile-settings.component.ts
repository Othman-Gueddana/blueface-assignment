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
  public isSaving: boolean
  public error: string

  constructor(private profile: ProfileService) {
    this.user = {
      firstName: '',
      lastName: '',
      username: '',
      age: 0,
    }
  }

  private async getProfile() {
    let tryNum = 0
    let user: IProfile
    while (!user) {
      tryNum++
      console.log('try', tryNum)
      try {
        user = await this.profile.getProfileUser()
      } catch (error) {
        console.log(error.error)
      }
    }
    console.log('success')
    return user
  }

  async ngOnInit() {
    this.isLoading = true
    this.user = await this.getProfile()
    this.isLoading = false
  }

  clearError() {
    this.error = ''
  }

  async saveProfile() {
    this.isSaving = true
    this.clearError()
    try {
      this.user = (await this.profile.setName(this.user.firstName)) as IProfile
    } catch (error) {
      this.error = error.error
    }
    this.isSaving = false
  }
}
