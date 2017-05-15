import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { FeatureOneComponentOne } from "./components/feature-one-component-one/feature-one-component-one";
import { FeatureOneComponentTwo } from "./components/feature-one-component-two/feature-one-component-two";
import { FeatureOneComponentThree } from "./components/feature-one-component-three/feature-one-component-three";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
        FeatureOneComponentOne,
        FeatureOneComponentTwo,
        FeatureOneComponentThree,
    ],
    exports: [
        FeatureOneComponentOne,
        FeatureOneComponentTwo,
        FeatureOneComponentThree,
    ],
})
export class FeatureOneModule { }
