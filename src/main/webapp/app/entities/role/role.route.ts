import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable } from 'rxjs';
import { Role } from 'app/shared/model/role.model';
import { RoleService } from './role.service';
import { RoleComponent } from './role.component';
import { RoleDetailComponent } from './role-detail.component';
import { RoleUpdateComponent } from './role-update.component';
import { RoleDeletePopupComponent } from './role-delete-dialog.component';
import { IRole } from 'app/shared/model/role.model';

@Injectable({ providedIn: 'root' })
export class RoleResolve implements Resolve<IRole> {
    constructor(private service: RoleService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).map((role: HttpResponse<Role>) => role.body);
        }
        return Observable.of(new Role());
    }
}

export const roleRoute: Routes = [
    {
        path: 'role',
        component: RoleComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'colibriApp.role.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'role/:id/view',
        component: RoleDetailComponent,
        resolve: {
            role: RoleResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'colibriApp.role.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'role/new',
        component: RoleUpdateComponent,
        resolve: {
            role: RoleResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'colibriApp.role.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'role/:id/edit',
        component: RoleUpdateComponent,
        resolve: {
            role: RoleResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'colibriApp.role.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const rolePopupRoute: Routes = [
    {
        path: 'role/:id/delete',
        component: RoleDeletePopupComponent,
        resolve: {
            role: RoleResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'colibriApp.role.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
