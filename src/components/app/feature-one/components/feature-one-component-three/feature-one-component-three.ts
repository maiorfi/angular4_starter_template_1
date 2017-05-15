import { Component, Input } from "@angular/core";

import { MyService } from "../../services/my-service";

@Component({
    selector: "feature-one-component-three",
    template: require("./feature-one-component-three.html"),
    styles: [require("./feature-one-component-three.scss")],
    providers: [MyService],
})
export class FeatureOneComponentThree {

    public a: number = 0;
    public b: number = 0;
    public risultato: number = 0;

    constructor(private myService: MyService) { }

    public eseguiSomma(): void {
        this.risultato = this.myService.sum(this.a, this.b);
    }

    public eseguiSommaAsync(): void {
        this.myService.sumAsync(this.a, this.b)
            .then((res) => { this.risultato = res; });
    }
}
