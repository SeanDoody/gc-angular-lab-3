import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/models/user-profile';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    userProfile!: UserProfile;

    constructor(private profileService: ProfileService) { }

    ngOnInit(): void {
        this.userProfile = this.profileService.getUserProfile();
    }

}
