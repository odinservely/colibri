import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { IProfile } from 'app/shared/model/profile.model';
import { ProfileService } from './profile.service';
import { IUser, UserService } from 'app/core';
import { IAssociation } from 'app/shared/model/association.model';
import { AssociationService } from 'app/entities/association';
import { IRole } from 'app/shared/model/role.model';
import { RoleService } from 'app/entities/role';
import { ICategory } from 'app/shared/model/category.model';
import { CategoryService } from 'app/entities/category';
import { IEvent } from 'app/shared/model/event.model';
import { EventService } from 'app/entities/event';

@Component({
    selector: 'jhi-profile-update',
    templateUrl: './profile-update.component.html'
})
export class ProfileUpdateComponent implements OnInit {
    private _profile: IProfile;
    isSaving: boolean;

    users: IUser[];

    associations: IAssociation[];

    roles: IRole[];

    categories: ICategory[];

    events: IEvent[];
    birthDateDp: any;

    constructor(
        private jhiAlertService: JhiAlertService,
        private profileService: ProfileService,
        private userService: UserService,
        private associationService: AssociationService,
        private roleService: RoleService,
        private categoryService: CategoryService,
        private eventService: EventService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ profile }) => {
            this.profile = profile;
        });
        this.userService.query().subscribe(
            (res: HttpResponse<IUser[]>) => {
                this.users = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.associationService.query().subscribe(
            (res: HttpResponse<IAssociation[]>) => {
                this.associations = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.roleService.query().subscribe(
            (res: HttpResponse<IRole[]>) => {
                this.roles = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.categoryService.query().subscribe(
            (res: HttpResponse<ICategory[]>) => {
                this.categories = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.eventService.query().subscribe(
            (res: HttpResponse<IEvent[]>) => {
                this.events = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.profile.id !== undefined) {
            this.subscribeToSaveResponse(this.profileService.update(this.profile));
        } else {
            this.subscribeToSaveResponse(this.profileService.create(this.profile));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IProfile>>) {
        result.subscribe((res: HttpResponse<IProfile>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackUserById(index: number, item: IUser) {
        return item.id;
    }

    trackAssociationById(index: number, item: IAssociation) {
        return item.id;
    }

    trackRoleById(index: number, item: IRole) {
        return item.id;
    }

    trackCategoryById(index: number, item: ICategory) {
        return item.id;
    }

    trackEventById(index: number, item: IEvent) {
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
    get profile() {
        return this._profile;
    }

    set profile(profile: IProfile) {
        this._profile = profile;
    }
}
