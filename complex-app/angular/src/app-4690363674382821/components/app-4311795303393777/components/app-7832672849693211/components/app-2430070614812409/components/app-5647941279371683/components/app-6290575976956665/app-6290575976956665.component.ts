import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6290575976956665',
  standalone: true,
  templateUrl: './app-6290575976956665.component.html',
  styleUrl: './app-6290575976956665.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6290575976956665Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
