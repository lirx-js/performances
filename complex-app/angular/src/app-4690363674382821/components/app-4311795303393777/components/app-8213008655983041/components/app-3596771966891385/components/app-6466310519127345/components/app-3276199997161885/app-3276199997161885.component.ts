import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3276199997161885',
  standalone: true,
  templateUrl: './app-3276199997161885.component.html',
  styleUrl: './app-3276199997161885.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3276199997161885Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
