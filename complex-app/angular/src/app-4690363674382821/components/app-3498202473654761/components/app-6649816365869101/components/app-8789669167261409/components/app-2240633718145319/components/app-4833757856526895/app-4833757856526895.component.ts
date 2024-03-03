import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4833757856526895',
  standalone: true,
  templateUrl: './app-4833757856526895.component.html',
  styleUrl: './app-4833757856526895.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4833757856526895Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
