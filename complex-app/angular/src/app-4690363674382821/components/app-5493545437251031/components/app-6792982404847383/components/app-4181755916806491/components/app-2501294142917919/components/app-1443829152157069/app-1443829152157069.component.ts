import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1443829152157069',
  standalone: true,
  templateUrl: './app-1443829152157069.component.html',
  styleUrl: './app-1443829152157069.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1443829152157069Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
