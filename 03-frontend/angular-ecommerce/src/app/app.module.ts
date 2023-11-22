import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './service/product.service';

@NgModule({
  declarations: [//componentes :visual
    AppComponent,
    ProductListComponent
  ],
  imports: [//módulos 
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProductService],//servicios que están disponibles para toda la aplicación 
  bootstrap: [AppComponent]//componente raíz
})
export class AppModule { }
