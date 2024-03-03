import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4729930439727425',
  standalone: true,
  templateUrl: './app-4729930439727425.component.html',
  styleUrl: './app-4729930439727425.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4729930439727425Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
