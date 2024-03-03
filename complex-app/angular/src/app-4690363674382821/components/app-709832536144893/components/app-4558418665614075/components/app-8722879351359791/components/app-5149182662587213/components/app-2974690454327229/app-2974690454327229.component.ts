import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2974690454327229',
  standalone: true,
  templateUrl: './app-2974690454327229.component.html',
  styleUrl: './app-2974690454327229.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2974690454327229Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
