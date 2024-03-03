import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3044275497743649',
  standalone: true,
  templateUrl: './app-3044275497743649.component.html',
  styleUrl: './app-3044275497743649.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3044275497743649Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
