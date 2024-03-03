import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-660197147208211',
  standalone: true,
  templateUrl: './app-660197147208211.component.html',
  styleUrl: './app-660197147208211.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App660197147208211Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
