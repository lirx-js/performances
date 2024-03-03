import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2914739681864575',
  standalone: true,
  templateUrl: './app-2914739681864575.component.html',
  styleUrl: './app-2914739681864575.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2914739681864575Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
