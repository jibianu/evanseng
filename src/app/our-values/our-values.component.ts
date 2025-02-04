import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-our-values',
  templateUrl: './our-values.component.html',
  styleUrls: ['./our-values.component.scss']
})
export class OurValuesComponent {

  constructor(
    private meta:Meta,
    private title:Title
  ) {
    this.title.setTitle('Evans Engineering | Our Values')
    this.meta.addTags([
      { name: 'description', content: 'We are a dynamic and fast-growing MEP (Mechanical, Electrical, and Plumbing) engineering firm based in Chennai.' },
      { name: 'keywords', content: 'Electrical work in chennai, Plumbing contractors in chennai, Mechanical contractors in chennai' }])
  }

}
