import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4925353891550501',
  standalone: true,
  templateUrl: './app-4925353891550501.component.html',
  styleUrl: './app-4925353891550501.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4925353891550501Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
