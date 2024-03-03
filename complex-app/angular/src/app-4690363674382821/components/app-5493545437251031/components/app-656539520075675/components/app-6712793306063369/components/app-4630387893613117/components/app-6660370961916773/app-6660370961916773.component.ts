import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6660370961916773',
  standalone: true,
  templateUrl: './app-6660370961916773.component.html',
  styleUrl: './app-6660370961916773.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6660370961916773Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
