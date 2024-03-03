import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4792151845351901',
  standalone: true,
  templateUrl: './app-4792151845351901.component.html',
  styleUrl: './app-4792151845351901.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4792151845351901Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
