import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4823237182680357',
  standalone: true,
  templateUrl: './app-4823237182680357.component.html',
  styleUrl: './app-4823237182680357.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4823237182680357Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
