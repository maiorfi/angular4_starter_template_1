import { Component, Input } from "@angular/core";

@Component({
    selector: "feature-one-component-two",
    template: require("./feature-one-component-two.html"),
    styles: [require("./feature-one-component-two.scss")],
})
export class FeatureOneComponentTwo {

    @Input()
    public content: string = "";
}
