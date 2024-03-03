import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4176126158366605',
  standalone: true,
  templateUrl: './app-4176126158366605.component.html',
  styleUrl: './app-4176126158366605.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4176126158366605Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
