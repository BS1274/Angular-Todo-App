import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstcompComponent } from './FirstComponent/todos/firstcomp.component';
import { AboutComponent } from './FirstComponent/about/about.component';

// Export the routes constant
export const routes: Routes = [
  { path: '', component: FirstcompComponent }, // Default route
  { path: 'about', component: AboutComponent }, // About route
  { path: '**', redirectTo: '' } // Wildcard route for unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
