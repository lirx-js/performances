import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8280346258927355',
  standalone: true,
  templateUrl: './app-8280346258927355.component.html',
  styleUrl: './app-8280346258927355.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8280346258927355Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
