import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FontAwesomeModule
  ],
  declarations: [OrdersComponent]
})
export class OrdersModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faChevronLeft);
  }
}
