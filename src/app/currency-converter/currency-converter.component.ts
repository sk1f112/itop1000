// currency-converter.component.ts
import { Component } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { CurrencyRate } from '../header/currency.model';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
})
export class CurrencyConverterComponent {
  amount1: number = 0;
  selectedCurrency1: string = 'UAH';
  amount2: number = 0;
  selectedCurrency2: string = 'UAH';

  currencies: string[] = ['UAH', 'USD', 'EUR'];

  constructor(private currencyService: CurrencyService) {}

  convertCurrency(): void {
    this.currencyService.getExchangeRates().subscribe((data: CurrencyRate[]) => {
      const rate1 =
        this.selectedCurrency1 === 'UAH'
          ? 1
          : this.getRate(data, this.selectedCurrency1);

      const rate2 =
        this.selectedCurrency2 === 'UAH'
          ? 1
          : this.getRate(data, this.selectedCurrency2);

      if (rate1 !== null && rate2 !== null) {
        this.amount2 = (this.amount1 * rate1) / rate2;
      } else {
        console.error('Невірний вибір валюти');
      }
    });
  }

  private getRate(data: CurrencyRate[], currencyCode: string): number | null {
    const currency = data.find((rate) => rate.cc === currencyCode);
    return currency ? (currency.rate) : null;
}


  onInput1Change(): void {
    this.convertCurrency();
  }

  onCurrency1Change(): void {
    this.convertCurrency();
  }

  onInput2Change(): void {
    this.convertCurrency();
  }

  onCurrency2Change(): void {
    this.convertCurrency();
  }
}
