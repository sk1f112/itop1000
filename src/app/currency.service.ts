// currency.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrencyRate } from './header/currency.model';
@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiUrl = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

  constructor(private http: HttpClient) {}

  getExchangeRates(): Observable<any[]> {
    return this.http.get<CurrencyRate[]>(this.apiUrl);
  }
}
