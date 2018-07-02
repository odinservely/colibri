import { Component, OnInit } from '@angular/core';
import {Principal} from 'app/core';
import {AssociationService} from 'app/entities/association';
import {ProfileService} from 'app/entities/profile';
import {Profile} from 'app/shared/model/profile.model';
import {Association} from 'app/shared/model/association.model';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'jhi-create-association',
  templateUrl: './create-association.component.html',
  styles: []
})
export class CreateAssociationComponent implements OnInit {

    account: Account;
    profile: Profile = new Profile();
    association: Association = new Association();
    result: Association;
    success: boolean;
    error: boolean;

    constructor(
      private principal: Principal,
      private associationService: AssociationService,
      private profileService: ProfileService,
  ) { }

  ngOnInit() {
      this.principal.identity().then( account => {
          this.account = account;
          this.profileService.findCurrentProfile(parseInt(this.account.id)).subscribe (
              (res: HttpResponse<Profile>) => {
                  this.profile = res.body;
              },
              (res: HttpErrorResponse) => {
                  console.log(res.message);
              }
          );
      });
  }

  createAssociation() {
        this.association.presidentId = this.profile.id;
        this.associationService.create(this.association).subscribe (
            (res: HttpResponse<Association>) => {
                this.success = true;
                console.log(res.body);
            },
            (res: HttpErrorResponse) => {
                this.error = true;
                console.log(res.message);
            }
        );
  }

}
