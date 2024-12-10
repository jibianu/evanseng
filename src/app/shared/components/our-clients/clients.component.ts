import { Component } from "@angular/core";
import { CLIENTS_LIST } from "../../configs/general-values";
import { Router } from "@angular/router";

@Component({
    selector:'app-our-clients',
    templateUrl:'./clients.component.html'
})

export class OurClientsComponent {
    ourClientsList = CLIENTS_LIST;
    currentUrl:string

    constructor(private router:Router) {
        this.currentUrl = this.router.url
    }
}