import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditComponent } from './components/edit/edit.component';

const appRoutes: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'edit-profile', component: EditComponent },
    { path: '', redirectTo: '/profile', pathMatch: 'full' },
    { path: '**', redirectTo: '/profile', pathMatch: 'full' }
];

@NgModule({
    declarations: [
        AppComponent,
        ProfileComponent,
        EditComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
