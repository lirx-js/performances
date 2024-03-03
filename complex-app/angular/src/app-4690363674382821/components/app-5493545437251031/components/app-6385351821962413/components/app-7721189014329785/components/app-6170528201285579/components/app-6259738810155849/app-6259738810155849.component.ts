import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6259738810155849',
  standalone: true,
  templateUrl: './app-6259738810155849.component.html',
  styleUrl: './app-6259738810155849.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6259738810155849Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
