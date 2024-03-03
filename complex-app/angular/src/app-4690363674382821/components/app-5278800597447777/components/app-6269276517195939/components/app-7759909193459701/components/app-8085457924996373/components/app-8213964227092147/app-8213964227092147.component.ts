import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8213964227092147',
  standalone: true,
  templateUrl: './app-8213964227092147.component.html',
  styleUrl: './app-8213964227092147.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8213964227092147Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
