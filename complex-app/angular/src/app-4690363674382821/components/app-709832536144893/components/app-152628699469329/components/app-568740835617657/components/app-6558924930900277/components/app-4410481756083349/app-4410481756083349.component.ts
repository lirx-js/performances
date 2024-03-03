import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4410481756083349',
  standalone: true,
  templateUrl: './app-4410481756083349.component.html',
  styleUrl: './app-4410481756083349.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4410481756083349Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
