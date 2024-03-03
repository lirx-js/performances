import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5142380785386085',
  standalone: true,
  templateUrl: './app-5142380785386085.component.html',
  styleUrl: './app-5142380785386085.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5142380785386085Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
