import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1224916141473243',
  standalone: true,
  templateUrl: './app-1224916141473243.component.html',
  styleUrl: './app-1224916141473243.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1224916141473243Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
