import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }    from '@angular/forms';

// 引用FontAwesome
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSquare, faCheckSquare, faPhone, faUser as fasUser, faEnvelope as fasEnvelope, faLock, faBuilding, faEye } from '@fortawesome/free-solid-svg-icons';
import { faSquare as farSquare, faCheckSquare as farCheckSquare, faUser as farUser, faEnvelope as farEnvelope, faEyeSlash, faEye as farEye } from '@fortawesome/free-regular-svg-icons';
import { faStackOverflow, faGithub, faMedium, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

// 引用記憶體Web API(In-memory Web API)所需類別及Service
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './hero/in-memory-data.service';

//Routing Module
import { HeroRoutingModule }    from './hero/hero-routing.module';
import { AppRoutingModule } from './app-routing.module';

import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { NgCircleProgressModule } from 'ng-circle-progress';

//Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Component
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { swiperDemoComponent } from './swiperDemo/swiperDemo.component';
import { HeroTestComponent } from './hero/heroTest/heroTest.component';
import { HeroMenuComponent } from './hero/hero-menu/hero-menu.component';
import { formUIComponent } from './formUI/formUI.component';
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';
import { MessagesComponent }    from './hero/messages/messages.component';
import { HeroesComponent } from './hero/heroes/heroes.component';
import { FontawesomeIconComponent } from './fontawesome-icon/fontawesome-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    swiperDemoComponent,
    HeroTestComponent,
    formUIComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroesComponent,
    HeroMenuComponent,
    FontawesomeIconComponent,
  ],
  imports: [
    BrowserModule,
    HeroRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,    
    NgxUsefulSwiperModule,
    FormsModule,    
    FontAwesomeModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    NgCircleProgressModule.forRoot({
      radius: 20,
      space: -6,
      clockwise: true,
      showUnits: false,
      showSubtitle: false,
      titleFontSize: '18',
      outerStrokeWidth: 6,
      innerStrokeWidth: 6,
      outerStrokeGradientStopColor: '#53a9ff',
      outerStrokeColor: '#FD5F00',
      innerStrokeColor: '#e7e8ea',
      titleColor: '#FD5F00',
      animation: true,
      animationDuration: 300,
      renderOnClick: false
    }),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  /* FontAwesome icon */
  constructor(private library: FaIconLibrary) {
    library.addIcons(faSquare, faCheckSquare, farSquare, farCheckSquare, faStackOverflow, faGithub, faMedium, 
      faTwitter, faFacebook, fasUser, farUser, farEnvelope, fasEnvelope, faPhone, faBuilding, faLock, faEye, farEye, faEyeSlash);
  }
}
