import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1182236116313169',
  standalone: true,
  templateUrl: './app-1182236116313169.component.html',
  styleUrl: './app-1182236116313169.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1182236116313169Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
