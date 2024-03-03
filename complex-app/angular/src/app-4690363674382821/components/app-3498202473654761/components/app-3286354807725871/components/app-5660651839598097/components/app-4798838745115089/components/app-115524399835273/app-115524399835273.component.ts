import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-115524399835273',
  standalone: true,
  templateUrl: './app-115524399835273.component.html',
  styleUrl: './app-115524399835273.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App115524399835273Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
