import { Component, OnInit, ChangeDetectorRef, Injector, inject } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, BehaviorSubject } from 'rxjs';
import { Title } from '@angular/platform-browser';

// declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  titles: string = "Change detector Ref titles"

  constructor(
    private router: Router,
    private cd: ChangeDetectorRef, 
    private title: Title
  ) {
    this.title.setTitle('Ng-guess')
   }

  ngOnInit() {
  }

}
