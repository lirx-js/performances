import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1909230006663315',
  standalone: true,
  templateUrl: './app-1909230006663315.component.html',
  styleUrl: './app-1909230006663315.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1909230006663315Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
