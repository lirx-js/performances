import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7716576147727201',
  standalone: true,
  templateUrl: './app-7716576147727201.component.html',
  styleUrl: './app-7716576147727201.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7716576147727201Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
