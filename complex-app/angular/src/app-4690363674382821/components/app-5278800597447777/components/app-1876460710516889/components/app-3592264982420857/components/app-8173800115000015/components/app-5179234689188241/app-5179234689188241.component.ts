import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5179234689188241',
  standalone: true,
  templateUrl: './app-5179234689188241.component.html',
  styleUrl: './app-5179234689188241.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5179234689188241Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
