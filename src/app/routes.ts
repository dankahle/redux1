import {FormComponent} from "./form/form/form.component";
import {EpicComponent} from "./epic/epic/epic.component";
import {TutorialComponent} from "./tutorial/tutorial/tutorial.component";
import {Routes} from "@angular/router";

export const appRoutes: Routes = [
  { path: 'tutorial', component: TutorialComponent },
  { path: 'epic', component: EpicComponent },
  { path: 'form', component: FormComponent },
  { path: '',
    redirectTo: '/tutorial',
    pathMatch: 'full'
  }
];
