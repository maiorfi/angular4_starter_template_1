import { Component, Input } from "@angular/core";

@Component({
    template: require("./route-not-found-component.html"),
    styles: [require("./route-not-found-component.scss")],
})
export class CrossCuttingRouteNotFoundComponent {

    @Input()
    public message: string = "Route Not Found";
}
