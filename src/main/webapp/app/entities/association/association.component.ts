import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IAssociation } from 'app/shared/model/association.model';
import { Principal } from 'app/core';
import { AssociationService } from './association.service';

@Component({
    selector: 'jhi-association',
    templateUrl: './association.component.html'
})
export class AssociationComponent implements OnInit, OnDestroy {
    associations: IAssociation[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private associationService: AssociationService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {}

    loadAll() {
        this.associationService.query().subscribe(
            (res: HttpResponse<IAssociation[]>) => {
                this.associations = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInAssociations();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IAssociation) {
        return item.id;
    }

    registerChangeInAssociations() {
        this.eventSubscriber = this.eventManager.subscribe('associationListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
