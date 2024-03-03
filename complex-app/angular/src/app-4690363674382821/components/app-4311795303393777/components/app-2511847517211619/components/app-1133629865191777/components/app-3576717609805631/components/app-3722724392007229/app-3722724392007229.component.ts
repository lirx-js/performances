import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3722724392007229',
  standalone: true,
  templateUrl: './app-3722724392007229.component.html',
  styleUrl: './app-3722724392007229.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3722724392007229Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
