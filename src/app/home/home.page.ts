import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';
import { HomeService } from './services/home.service';
import { TickersDTO } from './interfaces/tickers.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonContent],
})
export class HomePage implements OnInit {
  /** Data for tickers */
  dataTickers: TickersDTO[] = [];

  constructor(private readonly homeservice: HomeService) {}

  ngOnInit(): void {
    this.getDataTickers();
  }

  /**
   * Getting data from service
   * @service HomeService
   */
  getDataTickers(): void {
    this.homeservice
      .getTickers()
      .subscribe((res) => (this.dataTickers = res.data));
  }
}
