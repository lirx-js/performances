import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5153328583725119',
  standalone: true,
  templateUrl: './app-5153328583725119.component.html',
  styleUrl: './app-5153328583725119.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5153328583725119Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
