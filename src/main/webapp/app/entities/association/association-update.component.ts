import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { IAssociation } from 'app/shared/model/association.model';
import { AssociationService } from './association.service';
import { IProfile } from 'app/shared/model/profile.model';
import { ProfileService } from 'app/entities/profile';
import { IEvent } from 'app/shared/model/event.model';
import { EventService } from 'app/entities/event';
import { IType } from 'app/shared/model/type.model';
import { TypeService } from 'app/entities/type';

@Component({
    selector: 'jhi-association-update',
    templateUrl: './association-update.component.html'
})
export class AssociationUpdateComponent implements OnInit {
    private _association: IAssociation;
    isSaving: boolean;

    presidents: IProfile[];

    events: IEvent[];

    profiles: IProfile[];

    types: IType[];

    constructor(
        private jhiAlertService: JhiAlertService,
        private associationService: AssociationService,
        private profileService: ProfileService,
        private eventService: EventService,
        private typeService: TypeService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ association }) => {
            this.association = association;
        });
        this.profileService.query({ filter: 'association-is-null' }).subscribe(
            (res: HttpResponse<IProfile[]>) => {
                if (!this.association.presidentId) {
                    this.presidents = res.body;
                } else {
                    this.profileService.find(this.association.presidentId).subscribe(
                        (subRes: HttpResponse<IProfile>) => {
                            this.presidents = [subRes.body].concat(res.body);
                        },
                        (subRes: HttpErrorResponse) => this.onError(subRes.message)
                    );
                }
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.eventService.query().subscribe(
            (res: HttpResponse<IEvent[]>) => {
                this.events = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.profileService.query().subscribe(
            (res: HttpResponse<IProfile[]>) => {
                this.profiles = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.typeService.query().subscribe(
            (res: HttpResponse<IType[]>) => {
                this.types = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.association.id !== undefined) {
            this.subscribeToSaveResponse(this.associationService.update(this.association));
        } else {
            this.subscribeToSaveResponse(this.associationService.create(this.association));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IAssociation>>) {
        result.subscribe((res: HttpResponse<IAssociation>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackProfileById(index: number, item: IProfile) {
        return item.id;
    }

    trackEventById(index: number, item: IEvent) {
        return item.id;
    }

    trackTypeById(index: number, item: IType) {
        return item.id;
    }

    getSelected(selectedVals: Array<any>, option: any) {
        if (selectedVals) {
            for (let i = 0; i < selectedVals.length; i++) {
                if (option.id === selectedVals[i].id) {
                    return selectedVals[i];
                }
            }
        }
        return option;
    }
    get association() {
        return this._association;
    }

    set association(association: IAssociation) {
        this._association = association;
    }
}
