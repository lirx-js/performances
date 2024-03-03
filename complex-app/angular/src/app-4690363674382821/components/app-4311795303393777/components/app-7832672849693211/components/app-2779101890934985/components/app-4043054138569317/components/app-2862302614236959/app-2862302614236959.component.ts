import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2862302614236959',
  standalone: true,
  templateUrl: './app-2862302614236959.component.html',
  styleUrl: './app-2862302614236959.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2862302614236959Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
