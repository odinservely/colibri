import { Component, OnInit } from '@angular/core';
import {Principal, User, UserService} from 'app/core';
import {ProfileService} from 'app/entities/profile';
import {Profile} from 'app/shared/model/profile.model';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'jhi-create-profile',
  templateUrl: './create-profile.component.html',
  styles: []
})
export class CreateProfileComponent implements OnInit {
    account: Account;
    user: User;
    profile: Profile;
    error: boolean;
    success: boolean;

  constructor(
      private principal: Principal,
      private profileService: ProfileService,
      private userService: UserService
  ) { }

  ngOnInit() {
      this.principal.identity().then( account => {
          this.account = account;
          this.userService.find(this.account.login).subscribe(
              (res: HttpResponse<User>) => {
                  this.user = res.body;
              },
              (res: HttpErrorResponse) => {
                  console.log(res.message);
            }
          );
      });
      this.profile = new Profile();
  }

  completeProfile() {
        this.profile.userId = parseInt(this.account.id);
        this.profileService.create(this.profile).subscribe (
            (res: HttpResponse<Profile>) => {
                this.success = true;
                // this.user.authorities[0] = "ROLE_PROFILE";
                // this.userService.update(this.user).subscribe(
                //     (res: HttpResponse<User>) => {
                //         console.log(res.body);
                //     },
                //     (res: HttpErrorResponse) => {
                //         console.log(res.message);
                //     }
                // );
            },
            (res: HttpErrorResponse) => {
                console.log(res.message);
                this.error = true;
            }
        );
  }

}
