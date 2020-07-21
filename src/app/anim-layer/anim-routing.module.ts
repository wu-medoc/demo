import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AnimLayerComponent } from './anim-layer.component';

const routes: Routes = [
  { path: 'animLayer', component: AnimLayerComponent, data: { animation: 'animPage' }},  
  { path: 'animLayer/:id', component: AnimLayerComponent, data: { animation: 'animDetailPage' } }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AnimRoutingModule { }
