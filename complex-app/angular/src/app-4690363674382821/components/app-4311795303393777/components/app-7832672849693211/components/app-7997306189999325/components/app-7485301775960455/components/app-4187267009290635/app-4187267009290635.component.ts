import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4187267009290635',
  standalone: true,
  templateUrl: './app-4187267009290635.component.html',
  styleUrl: './app-4187267009290635.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4187267009290635Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
