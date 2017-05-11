import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { FeatureOneComponentOne } from "./components/feature-one-component-one/feature-one-component-one";
import { FeatureOneComponentTwo } from "./components/feature-one-component-two/feature-one-component-two";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
        FeatureOneComponentOne,
        FeatureOneComponentTwo],
    exports: [
        FeatureOneComponentOne,
        FeatureOneComponentTwo],
})
export class FeatureOneModule { }
