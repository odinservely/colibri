import { Component, OnInit } from '@angular/core';
import {Principal} from 'app/core';
import {ProfileService} from 'app/entities/profile';
import {Profile} from 'app/shared/model/profile.model';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'jhi-create-profile',
  templateUrl: './create-profile.component.html',
  styles: []
})
export class CreateProfileComponent implements OnInit {
    currentAccount: Account;
    profile: Profile;

  constructor(
      private principal: Principal,
      private profileService: ProfileService,
  ) { }

  ngOnInit() {
      this.principal.identity().then( account => {
          this.currentAccount = account;
      });
      this.profile = new Profile();
  }

  completeProfile() {
        this.profile.userId = parseInt(this.currentAccount.id);
        console.log(this.profile);
        this.profileService.create(this.profile).subscribe (
            (res: HttpResponse<Profile>) => {
                console.log(res.body);
            },
            (res: HttpErrorResponse) => {
                console.log(res.message);
            }
        );
  }

}
