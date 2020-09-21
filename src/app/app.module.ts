import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { SingleProductComponent } from './components/shared/single-product/single-product.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LayoutModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
