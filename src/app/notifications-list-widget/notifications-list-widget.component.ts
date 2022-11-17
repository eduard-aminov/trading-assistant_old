import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { NotificationsListWidgetFacadeService } from './services/notifications-list-widget.facade.service';
import { takeUntil } from 'rxjs';
import { DestroyService } from '../core/services/destroy.service';

@Component({
  selector: 'app-notifications-list-widget',
  templateUrl: './notifications-list-widget.component.html',
  styleUrls: ['./notifications-list-widget.component.scss'],
  providers: [DestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsListWidgetComponent {

  public readonly notifications$ = this.facade.notifications$;
  public readonly isNotificationsEmpty$ = this.facade.isNotificationsEmpty$;

  constructor(
    @Inject(NotificationsListWidgetFacadeService) private facade: NotificationsListWidgetFacadeService,
    @Inject(DestroyService) private destroy$: DestroyService,
  ) {
    facade.runWebsocketServices().pipe(
      takeUntil(this.destroy$)
    ).subscribe();
  }
}