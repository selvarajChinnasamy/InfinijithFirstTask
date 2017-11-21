import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormsComponent  } from './forms/forms.component';

export const router: Routes = [
    { path: '', redirectTo: 'form', pathMatch: 'full' },
    { path: 'form', component: FormsComponent  },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);