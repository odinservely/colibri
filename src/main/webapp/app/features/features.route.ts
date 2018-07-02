import { Routes } from '@angular/router';
import {ListingAssociationsComponent} from 'app/features/listing-associations/listing-associations.component';
import {CreateAssociationComponent} from 'app/features/create-association/create-association.component';
import {CreateProfileComponent} from "app/features/create-profile/create-profile.component";

export const featuresRoute: Routes = [
    {
        path: 'listing-associations',
        component: ListingAssociationsComponent,
        data: {
            pageTitle: 'Liste des associations',
            authorities: ['ROLE_USER'],
        },
    },

    {
        path: 'create-association',
        component: CreateAssociationComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Créez votre association'
        },
    },

    {
        path: 'create-profile',
        component: CreateProfileComponent,
        data: {
            pageTitle: 'Créer votre profil',
            authorities: ['ROLE_USER'],
        },
    },

];

export const featuresPopupRoute: Routes = [

];
