import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarosoulComponent } from './carosoul/carosoul.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MainShopPageComponent } from './main-shop-page/main-shop-page.component';
import { SingleShopePageComponent } from './single-shope-page/single-shope-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingleProductComponent } from './single-product/single-product.component';
import { BlogPageSingleComponent } from './blog-page-single/blog-page-single.component';

@NgModule({
  declarations: [
    AppComponent,
    CarosoulComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    MainShopPageComponent,
    SingleShopePageComponent,
    ContactUsComponent,
    BlogPageComponent,
    SingleProductComponent,
    BlogPageSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
