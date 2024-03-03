import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6997370832799611',
  standalone: true,
  templateUrl: './app-6997370832799611.component.html',
  styleUrl: './app-6997370832799611.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6997370832799611Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
