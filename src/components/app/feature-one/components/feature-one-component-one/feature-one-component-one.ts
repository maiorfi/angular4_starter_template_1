import { Component } from "@angular/core";

import { FeatureOneModelOne } from "../../models/feature-one-model-one";

@Component({
    selector: "feature-one-component",
    template: require("./feature-one-component-one.html"),
    styles: [require("./feature-one-component-one.scss")],
})
export class FeatureOneComponentOne {

    public newColor = "";

    public colors: FeatureOneModelOne[] = [
        { id: 1, name: "red" },
        { id: 2, name: "gold" },
        { id: 3, name: "green" },
        { id: 4, name: "white" },
        { id: 5, name: "saffron" },
        { id: 6, name: "blue" },
    ];

    public addColor() {

        const nextId = this.colors.reduce(
            (maxId, nextColor) => Math.max(maxId, nextColor.id), 0) + 1;

        console.log(nextId);

        this.colors = this.colors.concat({
            id: nextId,
            name: this.newColor,
        });

        this.newColor = "";

    }

}
