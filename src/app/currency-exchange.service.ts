// currency-exchange.service.ts
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { CurrencyRate } from './header/currency.model';
import { CurrencyService } from './currency.service';

@Injectable({
  providedIn: 'root',
})
export class CurrencyExchangeService {
  private exchangeRatesSubject: BehaviorSubject<CurrencyRate[]> = new BehaviorSubject<CurrencyRate[]>([]);
  exchangeRates$: Observable<CurrencyRate[]> = this.exchangeRatesSubject.asObservable();

  constructor(private CurrencyService: CurrencyService) {}

  updateExchangeRates(): void {
    this.CurrencyService.getExchangeRates().subscribe((data) => {
      this.exchangeRatesSubject.next(data);
    });
  }
}
