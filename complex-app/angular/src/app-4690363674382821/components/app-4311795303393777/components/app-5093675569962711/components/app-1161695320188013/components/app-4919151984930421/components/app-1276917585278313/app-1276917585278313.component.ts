import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1276917585278313',
  standalone: true,
  templateUrl: './app-1276917585278313.component.html',
  styleUrl: './app-1276917585278313.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1276917585278313Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
