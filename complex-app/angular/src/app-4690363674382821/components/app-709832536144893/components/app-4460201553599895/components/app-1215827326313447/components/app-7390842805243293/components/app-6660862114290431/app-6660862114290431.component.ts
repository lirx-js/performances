import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6660862114290431',
  standalone: true,
  templateUrl: './app-6660862114290431.component.html',
  styleUrl: './app-6660862114290431.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6660862114290431Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
