// currency-header.component.ts
import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { CurrencyRate } from './currency.model';

@Component({
  selector: 'app-currency-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class CurrencyHeaderComponent implements OnInit {
  exchangeRates: CurrencyRate[] = [];
  selectedCurrencies: string[] = ['USD', 'EUR']; // Вибрані вами валюти

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getExchangeRates().subscribe((data) => {
      // Фільтрація валют за кодом (cc)
      this.exchangeRates = data.filter(rate => this.selectedCurrencies.includes(rate.cc));
    });
  }
}
