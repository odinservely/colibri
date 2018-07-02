import { Component, OnInit } from '@angular/core';
import {Principal} from 'app/core';
import {AssociationService} from 'app/entities/association';
import {ProfileService} from 'app/entities/profile';
import {Profile} from 'app/shared/model/profile.model';
import {Association} from 'app/shared/model/association.model';

@Component({
  selector: 'jhi-create-association',
  templateUrl: './create-association.component.html',
  styles: []
})
export class CreateAssociationComponent implements OnInit {

    account: Account;
    profile: Profile = new Profile();
    association: Association = new Association();

    constructor(
      private principal: Principal,
      private associationService: AssociationService,
      private profileService: ProfileService,
  ) { }

  ngOnInit() {
      this.principal.identity().then( account => {
          this.account = account;

      });
  }

}
