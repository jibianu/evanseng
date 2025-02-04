import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  constructor(
    private meta:Meta,
    private title:Title
  ) {
    this.title.setTitle('Evans Engineering | Contact us')
    this.meta.addTags([
      { name: 'description', content: 'Evans Engineering, based in Chennai, specializes in MEP (Mechanical, Electrical, and Plumbing) engineering services, delivering innovative and sustainable solutions for diverse projects.' },
      { name: 'keywords', content: 'Electrical work in chennai, Plumbing contractors in chennai, Mechanical contractors in chennai' }])
  }

}
