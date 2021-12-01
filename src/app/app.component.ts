import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbService, Breadcrumb } from 'angular-crumbs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'breadcrumbs';

  constructor( private titleService: Title, private breadcrumbService: BreadcrumbService){ }

  ngOnInit(): void {
    this.breadcrumbService.breadcrumbChanged.subscribe( crumbs => {
      this.titleService.setTitle(this.createTitle(crumbs));
    })
  }
  private createTitle(routesCollection: Breadcrumb[]) {
    const title = 'Angular Demo';
    const titles = routesCollection.filter((route) => route.displayName);

    if (!titles.length) { return title; }

    const routeTitle = this.titlesToString(titles);
    return `${routeTitle} ${title}`;
}

private titlesToString(titles:any) {
  return titles.reduce((prev:any, curr:any) => {
      return `${curr.displayName} - ${prev}`;
  }, '');
}
getAnimationData(outlet: RouterOutlet) {
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
}
}
