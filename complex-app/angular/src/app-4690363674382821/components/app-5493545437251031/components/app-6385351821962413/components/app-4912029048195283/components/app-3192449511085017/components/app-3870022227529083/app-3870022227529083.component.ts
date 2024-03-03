import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3870022227529083',
  standalone: true,
  templateUrl: './app-3870022227529083.component.html',
  styleUrl: './app-3870022227529083.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3870022227529083Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
