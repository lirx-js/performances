import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8775069898593945',
  standalone: true,
  templateUrl: './app-8775069898593945.component.html',
  styleUrl: './app-8775069898593945.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8775069898593945Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
