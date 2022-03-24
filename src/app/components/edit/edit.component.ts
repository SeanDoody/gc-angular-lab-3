import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

    name: string = '';
    contact: string = '';
    bio: string = '';

    constructor(private profileService: ProfileService, private router: Router) { }

    ngOnInit(): void {
    }

    updateProfile(): void {
        if (this.name !== '' && this.contact !== '' && this.bio !== '') {
            this.profileService.setUserProfile(this.name, this.contact, this.bio);
            this.router.navigate(['/', 'profile']);
        } else {
            alert('You must populate each field to update your profile.');
        }
    }

}