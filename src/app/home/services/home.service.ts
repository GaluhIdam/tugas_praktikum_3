import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ResponseDTO } from '../interfaces/respones.interface';
import { TickersDTO } from '../interfaces/tickers.interface';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  baseUrl: string = 'https://api.coinlore.net/api/tickers';

  constructor(private readonly httpClient: HttpClient) {}

  /**
   * Getting data from REST API.
   * https://api.coinlore.net/api/tickers
   * */
  getTickers(): Observable<ResponseDTO<TickersDTO>> {
    return this.httpClient.get<ResponseDTO<TickersDTO>>(this.baseUrl);
  }
}
