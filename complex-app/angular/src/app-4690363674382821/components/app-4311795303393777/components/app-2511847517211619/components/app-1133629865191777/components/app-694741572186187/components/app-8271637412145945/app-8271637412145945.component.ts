import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8271637412145945',
  standalone: true,
  templateUrl: './app-8271637412145945.component.html',
  styleUrl: './app-8271637412145945.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8271637412145945Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
