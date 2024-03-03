import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1754006538435075',
  standalone: true,
  templateUrl: './app-1754006538435075.component.html',
  styleUrl: './app-1754006538435075.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1754006538435075Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
