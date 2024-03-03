import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7095564339736883',
  standalone: true,
  templateUrl: './app-7095564339736883.component.html',
  styleUrl: './app-7095564339736883.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7095564339736883Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
