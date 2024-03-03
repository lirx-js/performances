import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5023608050569117',
  standalone: true,
  templateUrl: './app-5023608050569117.component.html',
  styleUrl: './app-5023608050569117.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5023608050569117Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
