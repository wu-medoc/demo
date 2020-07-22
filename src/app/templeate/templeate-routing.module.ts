import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TempleateComponent } from './templeate.component';


const routes: Routes = [
  { path: 'templeate', component: TempleateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TempleateRoutingModule { }
