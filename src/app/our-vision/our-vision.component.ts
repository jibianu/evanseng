import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-our-vision',
  templateUrl: './our-vision.component.html',
  styleUrls: ['./our-vision.component.scss']
})
export class OurVisionComponent {

  constructor(
    private meta:Meta,
    private title:Title
  ) {
    this.title.setTitle('Evans Engineering | Our Vision')
    this.meta.addTags([
      { name: 'description', content: 'We are a dynamic and fast-growing MEP (Mechanical, Electrical, and Plumbing) engineering firm based in Chennai.' },
      { name: 'keywords', content: 'Electrical work in chennai, Plumbing contractors in chennai, Mechanical contractors in chennai' }])
  }

}
