import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CLIENTS_LIST } from '../shared/configs/general-values';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  ourClientsList = CLIENTS_LIST;

  constructor(
    private meta:Meta,
    private title:Title
  ) {
    this.title.setTitle('Evans Engineering | Home')
    this.meta.addTags([
      { name: 'description', content: 'We are a dynamic and fast-growing MEP (Mechanical, Electrical, and Plumbing) engineering firm based in Chennai.' },
      { name: 'keywords', content: 'Electrical work in chennai, Plumbing contractors in chennai, Mechanical contractors in chennai' }])
  }
}
