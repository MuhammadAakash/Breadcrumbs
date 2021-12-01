import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildrenComponent } from './children/children.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path:'',redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent, data:{breadcrumb:'Home'}},
  {path:'settings', component:SettingsComponent, data:{breadcrumb:'Settings'},
    children:[
      {path:'children',
      component:ChildrenComponent,
      data:{breadcrumb:'Children'}}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
