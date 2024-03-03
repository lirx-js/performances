import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5950245629156155',
  standalone: true,
  templateUrl: './app-5950245629156155.component.html',
  styleUrl: './app-5950245629156155.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5950245629156155Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
