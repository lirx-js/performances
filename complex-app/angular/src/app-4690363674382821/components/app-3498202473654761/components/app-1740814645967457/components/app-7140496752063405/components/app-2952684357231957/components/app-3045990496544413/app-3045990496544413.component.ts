import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3045990496544413',
  standalone: true,
  templateUrl: './app-3045990496544413.component.html',
  styleUrl: './app-3045990496544413.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3045990496544413Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
