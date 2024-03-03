import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6588537461784847',
  standalone: true,
  templateUrl: './app-6588537461784847.component.html',
  styleUrl: './app-6588537461784847.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6588537461784847Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
