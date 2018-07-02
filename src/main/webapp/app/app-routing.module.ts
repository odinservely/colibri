import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { errorRoute, navbarRoute } from './layouts';
import { DEBUG_INFO_ENABLED } from 'app/app.constants';
import {featuresPopupRoute, featuresRoute} from "app/features/features.route";

const LAYOUT_ROUTES = [navbarRoute,
    ...errorRoute,
    ...featuresRoute,
    ...featuresPopupRoute
    ];

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                ...LAYOUT_ROUTES,
                {
                    path: 'admin',
                    loadChildren: './admin/admin.module#ColibriAdminModule'
                }
            ],
            { useHash: true, enableTracing: DEBUG_INFO_ENABLED }
        )
    ],
    exports: [RouterModule]
})
export class ColibriAppRoutingModule {}
