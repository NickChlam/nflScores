import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth-guard.guard';
import { UserFormComponent } from './user-form/user-form.component';
import { PickEmComponent } from './pick-em/pick-em.component';
import { TimesUpComponent } from './times-up/times-up.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'signUp', component: UserFormComponent},
    { path: 'pickem', component: PickEmComponent, canActivate: [AuthGuard] },
    { path: 'timesUp', component: TimesUpComponent, canActivate: [AuthGuard]},
    { path: 'complete', component: ConfirmationComponent, canActivate: [AuthGuard]},
    // { path: 'detail', component: PendDetailComponent, canActivate: [AuthGuard],
    //      resolve: { data: UserResolverService, users: GetUsersResolver}},

    { path: '**', redirectTo: 'home', pathMatch: 'full'}
];
