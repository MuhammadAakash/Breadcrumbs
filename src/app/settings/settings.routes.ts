import { Route } from "@angular/router";
import { ChildrenComponent } from "../children/children.component";
import { SettingsComponent } from "./settings.component";

export const SettingsRoutes: Route[]= [
    {
        path: '',
        component:SettingsComponent,
        data:{breadcrumb:'Settings'},
        children:[{path:'children' , component:ChildrenComponent, data:{breadcrumb:'Settings/Children'}}]
    }
]