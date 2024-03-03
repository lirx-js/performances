import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1380506306174549',
  standalone: true,
  templateUrl: './app-1380506306174549.component.html',
  styleUrl: './app-1380506306174549.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1380506306174549Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
