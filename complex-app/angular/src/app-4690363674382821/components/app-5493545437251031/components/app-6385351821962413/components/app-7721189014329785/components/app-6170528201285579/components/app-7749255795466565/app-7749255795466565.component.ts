import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7749255795466565',
  standalone: true,
  templateUrl: './app-7749255795466565.component.html',
  styleUrl: './app-7749255795466565.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7749255795466565Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
