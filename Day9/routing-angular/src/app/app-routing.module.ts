import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ArticleComponent } from './component/article/article.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { DetailsComponent } from './component/details/details.component';
import { HomeComponent } from './component/home/home.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { FormComponent } from './component/passanger/form/form.component';
import { PassangerComponent } from './component/passanger/passanger.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component : HomeComponent},
  {path : 'passanger', component : FormComponent},
  {path : 'article', component : ArticleComponent},
  {path : 'about', component : AboutComponent},
  {path : 'contact-us', component : ContactUsComponent},
  {path : 'detail', component : DetailsComponent},
  {path : '**', component : PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
