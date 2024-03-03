import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2399733201895413',
  standalone: true,
  templateUrl: './app-2399733201895413.component.html',
  styleUrl: './app-2399733201895413.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2399733201895413Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
