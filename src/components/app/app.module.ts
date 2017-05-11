import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { AppRoutingModule } from "./app.routes";

import { FeatureOneModule } from "./feature-one/feature-one.module";
import { CrossCuttingModule } from "./cross-cutting/cross-cutting.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        FeatureOneModule,
        CrossCuttingModule,
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
