import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2841177013115379',
  standalone: true,
  templateUrl: './app-2841177013115379.component.html',
  styleUrl: './app-2841177013115379.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2841177013115379Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
