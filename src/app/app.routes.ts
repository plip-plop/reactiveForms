import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Route, provideRouter } from '@angular/router';
import { ParentFormComponent } from './components/parent-form/parent-form.component';
import { AdvFormComponent } from './components/adv-form/adv-form.component';
import { InternalComponent } from './components/anchor/internal/internal.component';


// In the main application:
export const APP_ROUTES: Route[] = [
  { path: 'nested-forms', component: ParentFormComponent },
  { path: 'advanced-forms', component: AdvFormComponent },
  { path: 'internal-route', component: InternalComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(APP_ROUTES),
  ]
};