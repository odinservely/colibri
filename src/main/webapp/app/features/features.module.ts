import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ColibriSharedModule} from 'app/shared';
import { ListingAssociationsComponent } from './listing-associations/listing-associations.component';
import { CreateAssociationComponent } from './create-association/create-association.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ColibriSharedModule
    ],
    declarations: [
        CreateAssociationComponent,
        ListingAssociationsComponent,
        CreateProfileComponent
    ],
    entryComponents: [
        CreateAssociationComponent,
        ListingAssociationsComponent,
        CreateProfileComponent
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeaturesModule { }
