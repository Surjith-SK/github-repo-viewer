import { Component } from '@angular/core';
import { NotificationService } from './shared/services/notification/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'github-repo-viewer';

  constructor(private notificationService: NotificationService) {}
}
