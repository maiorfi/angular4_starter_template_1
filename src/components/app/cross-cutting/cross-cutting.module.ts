import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CrossCuttingRouteNotFoundComponent } from "./components/route-not-found-component/route-not-found-component";

@NgModule({
    imports: [ CommonModule ],
    declarations: [ CrossCuttingRouteNotFoundComponent ],
    exports: [ CrossCuttingRouteNotFoundComponent ],
})
export class CrossCuttingModule { }
