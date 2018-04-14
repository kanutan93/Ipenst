import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './containers/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ButtonComponent } from './components/button/button.component';
import { MenuComponent } from './components/menu/menu.component';
import {SuiModule} from 'ng2-semantic-ui';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TitleComponent } from './components/title/title.component';
import { FooterComponent } from './components/footer/footer.component';
import { PhoneComponent } from './components/phone/phone.component';
import { ConsultationBlockComponent } from './components/consultation-block/consultation-block.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { SectionComponent } from './components/section/section.component';
import { AboutCompanyComponent } from './containers/about-company/about-company.component';
import { VendorsComponent } from './containers/vendors/vendors.component';
import { VendorComponent } from './containers/vendor/vendor.component';
import {VendorsService} from './services/vendors.service';
import {CompanySectionService} from './services/company-section.service';
import { ContactsComponent } from './containers/contacts/contacts.component';
import {AgmCoreModule} from '@agm/core';
import { NewsComponent } from './containers/news/news.component';
import {NewsSectionService} from './services/news-section.service';
import {NewsDescriptionComponent} from './containers/news-description/news-description.component';
import {NewsService} from './services/news.service';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'company' , children: [
      {path: 'about', component: AboutCompanyComponent},
      {path: 'vendors', children: [
          {path: '', component: VendorsComponent},
          {path: ':id', component: VendorComponent}
        ]
      }
    ]
  },
  { path: 'news' , children: [
      {path: '', component: NewsComponent},
      {path: ':id', component: NewsDescriptionComponent}
    ]
  },
  {path: 'contacts', component: ContactsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ButtonComponent,
    MenuComponent,
    CarouselComponent,
    TitleComponent,
    FooterComponent,
    PhoneComponent,
    ConsultationBlockComponent,
    LeftMenuComponent,
    SectionComponent,
    AboutCompanyComponent,
    VendorsComponent,
    VendorComponent,
    ContactsComponent,
    NewsComponent,
    NewsDescriptionComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    SuiModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBSI9Td-GxEqY17Lse9SETc2I4oeQSkVa4'
    })
  ],
  providers: [VendorsService, CompanySectionService, NewsSectionService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
