import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  isHomePage: boolean = false;
  private subscribtion!: Subscription;
  constructor(private router: Router){}
  ngOnInit(): void {
    this.subscribtion = this.router.events.subscribe((event) => {
    if(event instanceof NavigationEnd){
      this.isHomePage = event.url === '/';
    }
  });
   
  }
  title = 'front';

}
