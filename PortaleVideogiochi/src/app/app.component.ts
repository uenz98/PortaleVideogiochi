import { Component } from '@angular/core';
import { getTranslationForTemplate } from '@angular/core/src/render3/i18n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'SuperGames';
}