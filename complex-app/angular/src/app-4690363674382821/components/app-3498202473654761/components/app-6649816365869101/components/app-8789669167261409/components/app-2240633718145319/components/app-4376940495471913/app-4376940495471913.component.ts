import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4376940495471913',
  standalone: true,
  templateUrl: './app-4376940495471913.component.html',
  styleUrl: './app-4376940495471913.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4376940495471913Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
