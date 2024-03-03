import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2292811666033099',
  standalone: true,
  templateUrl: './app-2292811666033099.component.html',
  styleUrl: './app-2292811666033099.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2292811666033099Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
