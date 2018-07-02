import { Component, OnInit } from '@angular/core';
import {Association} from 'app/shared/model/association.model';
import {AssociationService} from 'app/entities/association';
import {Principal} from 'app/core';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {JhiAlertService, JhiEventManager} from 'ng-jhipster';
import {ProfileService} from 'app/entities/profile';
import {Profile} from 'app/shared/model/profile.model';

@Component({
    selector: 'jhi-listing-associations',
    templateUrl: './listing-associations.component.html',
    styles: []
})
export class ListingAssociationsComponent implements OnInit {
    currentAccount: Account;
    currentProfile: Profile = new Profile();
    associations: Association[] = Array<Association>();

    constructor(
        private principal: Principal,
        private associationService: AssociationService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private profileService: ProfileService,
    ) { }

    ngOnInit() {
        this.principal.identity().then( account => {
            this.currentAccount = account;
        });
        this.loadAssociations();
    }

    private loadAssociations() {
        this.associationService.query().subscribe(
            (res: HttpResponse<Association[]>) => {
                this.associations = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
