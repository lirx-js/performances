import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4674494067818509',
  standalone: true,
  templateUrl: './app-4674494067818509.component.html',
  styleUrl: './app-4674494067818509.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4674494067818509Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
