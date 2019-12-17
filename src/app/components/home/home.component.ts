import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pages = [
    {
      id: 1,
      title: 'Salut ca va',
      color: 'green',
      rotation: 0,
      translation: 0
    },
    {
      id: 2,
      title: 'Oui',
      color: 'yellow',
      rotation: 0,
      translation: 0
    },
    {
      id: 3,
      title: 'Non',
      color: 'red',
      rotation: 0,
      translation: 0
    }
  ];
  pagesToDisplay = [];

  constructor() { }

  ngOnInit() {
    this.pagesToDisplay = [this.pages[0]];
    // this.pages = this.pages.reverse();
  }

  goToPage(id: number) {
    const pageToGo = {...this.pages.find(page => page.id == id)};
    pageToGo.rotation = this.getRandomInt(-10, 10);
    pageToGo.translation = this.getRandomInt(-1, 1);
    // console.log(pageToGo);
    this.pagesToDisplay.push(pageToGo);
  }

  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
