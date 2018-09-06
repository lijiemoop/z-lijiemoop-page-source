import { Component, OnInit } from '@angular/core';

import { PagesService } from './pages.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  providers: [ PagesService ]
})

export class PagesComponent implements OnInit {
  constructor(private pageService: PagesService ) { }
  ngOnInit() { }
}
