// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Додайте цей імпорт

import { AppComponent } from './app.component';
import { CurrencyHeaderComponent } from './header/header.component';
import { CurrencyService } from './currency.service';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyHeaderComponent,
    CurrencyConverterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent],
})
export class AppModule { }
