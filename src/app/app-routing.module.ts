import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductComponent } from './main-page/product/product.component';
import { ProductDetailComponent } from './main-page/product-detail/product-detail.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './main-page/home/home.component';
import { AboutUsComponent } from './main-page/about-us/about-us.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { ProductManageComponent } from './admin-main/product-manage/product-manage.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'main',
    component: MainPageComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'product', component: ProductComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'about', component: AboutUsComponent },
    ],
  },
  {
    path: 'admin-login',
    component: AdminLoginComponent,
  },
  {
    path: 'admin',
    component: AdminMainComponent,
    children: [
      { path: '', redirectTo: 'product-manage', pathMatch: 'full' },
      { path: 'product-manage', component: ProductManageComponent },
    ],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
