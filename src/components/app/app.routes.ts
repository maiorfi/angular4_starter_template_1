import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FeatureOneComponentOne } from "./feature-one/components/feature-one-component-one/feature-one-component-one";
import { FeatureOneComponentTwo } from "./feature-one/components/feature-one-component-two/feature-one-component-two";
import { FeatureOneComponentThree } from "./feature-one/components/feature-one-component-three/feature-one-component-three";

import { CrossCuttingRouteNotFoundComponent } from "./cross-cutting/components/route-not-found-component/route-not-found-component";

const appRoutes: Routes = [
    { path: "", redirectTo: "feature-one-component-one", pathMatch: "full" },
    { path: "feature-one-component-one", component: FeatureOneComponentOne },
    { path: "feature-one-component-two", component: FeatureOneComponentTwo },
    { path: "feature-one-component-three", component: FeatureOneComponentThree },
    { path: "feature-one-components-one-and-two", children: [{ path: "", outlet: "myotheroutlet", component: FeatureOneComponentTwo }, { path: "", component: FeatureOneComponentOne }] },
    { path: "**", component: CrossCuttingRouteNotFoundComponent },
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true, enableTracing: false });
