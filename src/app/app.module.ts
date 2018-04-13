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

const routes: Routes = [
  { path: '', component: HomeComponent}
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
    LeftMenuComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    SuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
