import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5745571012679349',
  standalone: true,
  templateUrl: './app-5745571012679349.component.html',
  styleUrl: './app-5745571012679349.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5745571012679349Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
