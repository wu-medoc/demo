import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

// 引用 intl-tel-input 插件
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

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
import { AnimRoutingModule }    from './anim-layer/anim-routing.module';
import { HeroRoutingModule }    from './hero/hero-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { TempleateRoutingModule } from './templeate/templeate-routing.module';
import { LifecycleRoutingModule } from './lifecycle/lifecycle-routing.module';

import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { NgCircleProgressModule } from 'ng-circle-progress';

//angularx-social-login
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider, AmazonLoginProvider,} from 'angularx-social-login';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

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
import { AnimLayerComponent } from './anim-layer/anim-layer.component';
import { AnimDetailComponent } from './anim-layer/anim-detail.component';
import { TempleateComponent } from './templeate/templeate.component';
import { BigHeroDetailComponent, HeroDetailsComponent } from './templeate/hero-details.component';
import { ClickDirective, ClickDirective2 } from './templeate/click.directive';
import { SizerComponent } from './templeate/sizer.component';
import { SvgComponent } from './templeate/svg.component';
import { HeroFormComponent } from './templeate/hero-form.component';
import { heroSwitchComponents } from './templeate/hero-switch.components';
import { UnlessDirective } from './templeate/unless.directive';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { PeekABooParentComponent } from './lifecycle/peek-a-boo-parent.component';
import { PeekABooComponent } from './lifecycle/peek-a-boo.component';
import { SpyParentComponent } from './lifecycle/spy.component';
import { SpyDirective } from './lifecycle/spy.directive';
import { OnChangesParentComponent, OnChangesComponent } from './lifecycle/on-changes.component';
import { CounterParentComponent,  MyCounterComponent } from './lifecycle/counter.component';
import { DoCheckParentComponent, DoCheckComponent } from './lifecycle/do-check.component';
import { AfterContentParentComponent, AfterContentComponent, ChildComponent } from './lifecycle/after-content.component';
import { AfterViewParentComponent, AfterViewComponent, ChildViewComponent} from './lifecycle/after-view.component';
import { HighlightDirective } from './highlight.directive';
import { NewComponentComponent } from './new-component/new-component.component';
import { SocialComponent } from './social/social.component';

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
    AnimLayerComponent,
    AnimDetailComponent,
    TempleateComponent,
    BigHeroDetailComponent, 
    ClickDirective, 
    ClickDirective2,
    HeroFormComponent,
    heroSwitchComponents,
    UnlessDirective,
    SizerComponent,
    SvgComponent,
    HeroDetailsComponent,
    LifecycleComponent,
    PeekABooParentComponent,
    PeekABooComponent,
    SpyParentComponent,
    SpyDirective,
    OnChangesParentComponent, 
    OnChangesComponent,
    CounterParentComponent,  
    MyCounterComponent,
    DoCheckParentComponent, 
    DoCheckComponent,
    AfterContentParentComponent, 
    AfterContentComponent, 
    ChildComponent,
    AfterViewParentComponent, 
    AfterViewComponent, 
    ChildViewComponent, HighlightDirective, NewComponentComponent, SocialComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AnimRoutingModule,
    HeroRoutingModule,
    TempleateRoutingModule,
    LifecycleRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,    
    NgxUsefulSwiperModule,
    BsDropdownModule.forRoot(),
    NgxIntlTelInputModule,
    FormsModule,    
    ReactiveFormsModule,
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
    SocialLoginModule,    
    ShareButtonsModule.withConfig({
      debug: true
    }),
    ShareIconsModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          // {
          //   id: GoogleLoginProvider.PROVIDER_ID,
          //   provider: new GoogleLoginProvider(
          //     'clientId'
          //   ),
          // },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('695335051058509'),
          },
          // {
          //   id: AmazonLoginProvider.PROVIDER_ID,
          //   provider: new AmazonLoginProvider(
          //     'clientId'
          //   ),
          // },
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  /* FontAwesome icon */
  constructor(private library: FaIconLibrary) {
    library.addIcons(faSquare, faCheckSquare, farSquare, farCheckSquare, faStackOverflow, faGithub, faMedium, 
      faTwitter, faFacebook, fasUser, farUser, farEnvelope, fasEnvelope, faPhone, faBuilding, faLock, faEye, farEye, faEyeSlash);
  }
}
