import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2691050118696351',
  standalone: true,
  templateUrl: './app-2691050118696351.component.html',
  styleUrl: './app-2691050118696351.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2691050118696351Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
