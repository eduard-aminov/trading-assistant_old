import { Inject, Injectable } from '@angular/core';
import { NotificationsListWidgetStoreService } from './notifications-list-widget.store.service';
import { NotificationsListWidgetApiService } from './notifications-list-widget.api.service';
import { Observable } from 'rxjs';

@Injectable()
export class NotificationsListWidgetFacadeService {

  public readonly notifications$ = this.store.select('notifications');
  public readonly isNotificationsEmpty$ = this.store.select('isNotificationsEmpty');

  constructor(
    @Inject(NotificationsListWidgetStoreService) private store: NotificationsListWidgetStoreService,
    @Inject(NotificationsListWidgetApiService) private api: NotificationsListWidgetApiService,
  ) {
  }

  public runWebsocketApi(): Observable<boolean> {
    return this.api.run();
  }

  public startListenMarketsChanges(symbols: string[]): Observable<void> {
    return this.api.loadSymbolsData(symbols);
  }
}