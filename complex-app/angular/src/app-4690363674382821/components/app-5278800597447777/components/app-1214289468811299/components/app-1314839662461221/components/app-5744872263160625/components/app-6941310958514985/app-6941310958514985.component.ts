import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6941310958514985',
  standalone: true,
  templateUrl: './app-6941310958514985.component.html',
  styleUrl: './app-6941310958514985.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6941310958514985Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
