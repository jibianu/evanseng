import { Component } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
    selector:'app-service-plumbing',
    templateUrl:'./plumbing-component.html'
})

export class PlumbingComponent {

    constructor(
        private meta:Meta,
        private title:Title
      ) {
        this.title.setTitle('Evans Engineering | Plumbing Work')
        this.meta.addTags([
          { name: 'description', content: 'We are a dynamic and fast-growing MEP (Mechanical, Electrical, and Plumbing) engineering firm based in Chennai.' },
          { name: 'keywords', content: 'Electrical work in chennai, Plumbing contractors in chennai, Mechanical contractors in chennai' }])
      }

}