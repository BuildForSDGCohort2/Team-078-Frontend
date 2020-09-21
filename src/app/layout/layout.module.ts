import { SingleProductComponent } from './../components/shared/single-product/single-product.component';
import { BannerComponent } from './../components/shared/banner/banner.component';
import { HomeComponent } from './../components/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    HomeComponent,
    BannerComponent,
    SingleProductComponent,
  ],
  imports: [CommonModule, LayoutRoutingModule],
})
export class LayoutModule {}
