import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-860539151405443',
  standalone: true,
  templateUrl: './app-860539151405443.component.html',
  styleUrl: './app-860539151405443.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App860539151405443Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
