import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarosoulComponent } from './carosoul/carosoul.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MainShopPageComponent } from './main-shop-page/main-shop-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { BlogPageSingleComponent } from './blog-page-single/blog-page-single.component';

const routes: Routes = [
  { path: '', component: CarosoulComponent},
  { path: 'aboutus', component: AboutUsComponent},
  { path: 'mainshop', component: MainShopPageComponent},
  { path: 'blog', component: BlogPageComponent},
  { path: 'contactus', component: ContactUsComponent},
  { path: 'singleshop', component: SingleProductComponent},
  { path: 'blogsingle', component: BlogPageSingleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
