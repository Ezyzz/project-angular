import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './main-page/home/home.component';
import { AboutUsComponent } from './main-page/about-us/about-us.component';
import { ProductComponent } from './main-page/product/product.component';
import { ProductDetailComponent } from './main-page/product-detail/product-detail.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { ProductManageComponent } from './admin-main/product-manage/product-manage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
    AdminLoginComponent,
    HomeComponent,
    AboutUsComponent,
    ProductComponent,
    ProductDetailComponent,
    AdminMainComponent,
    ProductManageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }