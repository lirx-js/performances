import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6145950117801109',
  standalone: true,
  templateUrl: './app-6145950117801109.component.html',
  styleUrl: './app-6145950117801109.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6145950117801109Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
