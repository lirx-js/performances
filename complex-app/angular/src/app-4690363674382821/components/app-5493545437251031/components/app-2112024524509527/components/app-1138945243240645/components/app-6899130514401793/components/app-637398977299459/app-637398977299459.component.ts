import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-637398977299459',
  standalone: true,
  templateUrl: './app-637398977299459.component.html',
  styleUrl: './app-637398977299459.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App637398977299459Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
