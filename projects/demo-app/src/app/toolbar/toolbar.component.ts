import { Component, OnInit } from '@angular/core';

import { AppSettingsService } from '../app-settings.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  darkTheme$ = this.appSettings.darkTheme$;

  constructor(private appSettings: AppSettingsService) {}

  ngOnInit(): void {}

  toggleTheme() {
    this.appSettings.toggleTheme();
  }
}
