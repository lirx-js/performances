import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3073942962608315',
  standalone: true,
  templateUrl: './app-3073942962608315.component.html',
  styleUrl: './app-3073942962608315.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3073942962608315Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
