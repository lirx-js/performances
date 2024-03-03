import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5397998283104997',
  standalone: true,
  templateUrl: './app-5397998283104997.component.html',
  styleUrl: './app-5397998283104997.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5397998283104997Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
