import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6923699405743673',
  standalone: true,
  templateUrl: './app-6923699405743673.component.html',
  styleUrl: './app-6923699405743673.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6923699405743673Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
