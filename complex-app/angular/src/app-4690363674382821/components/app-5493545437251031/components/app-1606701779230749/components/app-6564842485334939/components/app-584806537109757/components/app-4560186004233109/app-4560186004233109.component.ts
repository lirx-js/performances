import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4560186004233109',
  standalone: true,
  templateUrl: './app-4560186004233109.component.html',
  styleUrl: './app-4560186004233109.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4560186004233109Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
