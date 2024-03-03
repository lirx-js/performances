import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4027458414611991',
  standalone: true,
  templateUrl: './app-4027458414611991.component.html',
  styleUrl: './app-4027458414611991.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4027458414611991Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
