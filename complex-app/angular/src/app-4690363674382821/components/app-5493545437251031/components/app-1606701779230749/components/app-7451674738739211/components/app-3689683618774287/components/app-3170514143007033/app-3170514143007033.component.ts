import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3170514143007033',
  standalone: true,
  templateUrl: './app-3170514143007033.component.html',
  styleUrl: './app-3170514143007033.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3170514143007033Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
