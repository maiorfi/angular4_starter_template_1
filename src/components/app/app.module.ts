import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { FeatureOneModule } from "./feature-one/feature-one.module";

import { AppComponent } from "./app.component";

import { AppRoutingModule } from "./app.routes";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        FeatureOneModule,
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
