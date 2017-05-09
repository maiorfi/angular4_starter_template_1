import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FeatureOneComponentOne } from "./feature-one/components/feature-one-component-one/feature-one-component-one";

const appRoutes: Routes = [
    { path: "", redirectTo: "feature-one-component-one", pathMatch: "full" },
    { path: "feature-one-component-one", component: FeatureOneComponentOne },
    // { path: "**", component: RouteNotFoundComponent },
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
