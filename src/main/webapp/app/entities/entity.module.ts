import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ColibriProfileModule } from './profile/profile.module';
import { ColibriCategoryModule } from './category/category.module';
import { ColibriTypeModule } from './type/type.module';
import { ColibriAssociationModule } from './association/association.module';
import { ColibriEventModule } from './event/event.module';
import { ColibriRoleModule } from './role/role.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        ColibriProfileModule,
        ColibriCategoryModule,
        ColibriTypeModule,
        ColibriAssociationModule,
        ColibriEventModule,
        ColibriRoleModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ColibriEntityModule {}
