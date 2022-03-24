import { Injectable } from '@angular/core';
import { UserProfile } from 'src/app/models/user-profile';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    constructor() { }

    userProfile: UserProfile = {
        name: 'Sean Doody',
        contact: 'sdoody95@gmail.com',
        bio: 'Can\'t wait to start my new career in tech!'
    }

    getUserProfile(): UserProfile {
        return this.userProfile;
    }

    setUserProfile(name: string, contact: string, bio: string): void {
        this.userProfile.name = name;
        this.userProfile.contact = contact;
        this.userProfile.bio = bio;
    }



}