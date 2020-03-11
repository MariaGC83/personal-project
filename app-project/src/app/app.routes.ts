import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/modal/modal.component';

const AppRoutes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'home', component: HomeComponent },
  { path: 'modal', component: ModalComponent},

  { path: '**', pathMatch: 'full', redirectTo: 'form' }
];

export const AppRouting = RouterModule.forRoot(AppRoutes);
