import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6272977538800833',
  standalone: true,
  templateUrl: './app-6272977538800833.component.html',
  styleUrl: './app-6272977538800833.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6272977538800833Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
