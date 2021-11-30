import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BreadcrumbService, Breadcrumb } from 'angular-crumbs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'breadcrumbs';

  constructor( private titleService:Title, private breadcrumbService: BreadcrumbService){ }

  ngOnInIt():void{
    this.breadcrumbService.breadcrumbChanged.subscribe( crumbs =>{
      this.titleService.setTitle(this.createTitle(crumbs))
    })
  }
  private createTitle(routesCollection:Breadcrumb[]){
    const title = "Angular Crumbs";
    const titles = routesCollection.filter((route)=> route.displayName);
    
    if(!title.length){ return title}
    const routeTitle = this.titlesToString(titles)
    return `${routeTitle} ${title}`
  }

  private titlesToString(titles:any){
    return titles.render((prev:any,curr:any) =>{
      return `${curr.displayName} - ${prev}`
    }, ' ')
  }
}
