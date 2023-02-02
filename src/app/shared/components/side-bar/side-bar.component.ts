import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})

export class SideBarComponent implements OnInit {

  mainMenu: {
    defaultOptions: Array<any>,
    accessLink: Array<any>,
  } = { defaultOptions: [], accessLink: [] };

  customOptions: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil-estate',
        route: ['/', 'history']
      },
      {
        name: 'Buscar',
        icon: 'uil-search',
        route: ['', 'favorites']
      },
      {
        name: 'Tu Biblioteca',
        icon: 'uil-chart',
        route: ['', '']
      }
    ];

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square',
        route: ''
      },
      {
        name: 'Canciones que me gustan',
        icon: 'uil-star',
        route: ''
      }
    ];

    this.customOptions = [
      {
        
        name: 'Lista No. 1',
        icon: 'uil-music',
        route: ''
      },
      {
        name: 'Lista No. 4',
        icon: 'uil-music',
        route: ''
      },
      {
        name: 'Lista No. 3',
        icon: 'uil-music',
        route: ''
      },
    ]
  }
}
