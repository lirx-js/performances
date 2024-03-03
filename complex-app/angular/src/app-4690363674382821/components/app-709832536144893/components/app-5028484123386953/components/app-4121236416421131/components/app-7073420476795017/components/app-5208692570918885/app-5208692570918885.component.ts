import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5208692570918885',
  standalone: true,
  templateUrl: './app-5208692570918885.component.html',
  styleUrl: './app-5208692570918885.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5208692570918885Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
