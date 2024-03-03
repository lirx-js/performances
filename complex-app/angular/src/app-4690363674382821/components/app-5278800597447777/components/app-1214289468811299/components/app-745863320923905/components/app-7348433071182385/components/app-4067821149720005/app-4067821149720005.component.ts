import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4067821149720005',
  standalone: true,
  templateUrl: './app-4067821149720005.component.html',
  styleUrl: './app-4067821149720005.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4067821149720005Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
