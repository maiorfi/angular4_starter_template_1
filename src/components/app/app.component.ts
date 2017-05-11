import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "main",
    template: require("./app.component.html"),
    styles: [require("./app.component.scss")],
})
export class AppComponent /*implements OnInit*/ {

    constructor(
        private router: Router,
        private route: ActivatedRoute) {
    }

    /*public ngOnInit(): void {
        console.info(this.route.url, this.route.data, this.route.params, this.route.outlet, this.route.parent, this.route.firstChild, this.route.children);
    }*/
}
