import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { PassangerComponent } from './component/passanger/passanger.component';
import { ArticleComponent } from './component/article/article.component';
import { AboutComponent } from './component/about/about.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { DetailsComponent } from './component/details/details.component';
import { FormComponent } from './component/passanger/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PassangerComponent,
    ArticleComponent,
    AboutComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    DetailsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
