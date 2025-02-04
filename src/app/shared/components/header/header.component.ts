import { AfterViewInit, Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { MAIN_LINKS } from "../../configs/general-values";
import { Router } from "@angular/router";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})

export class HeaderComponent implements AfterViewInit {
    isMenuClicked:boolean  = false;
    isShowDropdown:boolean = false;
    menuLinkList:any       = MAIN_LINKS;
    dropdownButton:HTMLElement[] = [];
    dropdownMenu:HTMLElement[]   = [];

    constructor( private router:Router) {
    }

    triggerDropdown(event?:any) {
        event?.stopPropagation();
    }

    ngAfterViewInit(): void {
        const  elem = document.querySelectorAll('.toggler-dropdown')
        const elem2 = document.querySelectorAll('.dropdown-menu');
        this.dropdownButton = Array.from(elem) as HTMLElement[]; 
        this.dropdownMenu   = Array.from(elem2) as HTMLElement[];
        this.dropdownButton.forEach((item) => {
            item.onmouseover = (() => {
             this.dropdownMenu.forEach((child)=> {
                 child.classList.contains('show') ? child.classList.remove('show') : '';
                 if (item.id.split('_')[1] == child.id.split('_')[1]) {
                     console.log('hello')
                     child.classList.add('show')
                 }
             })
            })

            item.onmouseleave = (() => {
                this.dropdownMenu.forEach((child) => {
                    child.classList.contains('show') ? child.classList.remove('show') : '';
                })
            })
         })
    }

    checkMenuStatus() {
       this.isMenuClicked = document.body.classList.contains('no-scroll') ? false : true;
       if(this.isMenuClicked) {
        document.body.classList.add('no-scroll');
       } else {
        document.body.classList.remove('no-scroll')
       }
    }
}