import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-430075835562781',
  standalone: true,
  templateUrl: './app-430075835562781.component.html',
  styleUrl: './app-430075835562781.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App430075835562781Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
