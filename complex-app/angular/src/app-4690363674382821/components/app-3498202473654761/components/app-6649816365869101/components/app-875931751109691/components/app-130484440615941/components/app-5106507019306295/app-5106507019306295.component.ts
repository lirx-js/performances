import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5106507019306295',
  standalone: true,
  templateUrl: './app-5106507019306295.component.html',
  styleUrl: './app-5106507019306295.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5106507019306295Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
