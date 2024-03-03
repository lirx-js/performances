import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8444102933261591',
  standalone: true,
  templateUrl: './app-8444102933261591.component.html',
  styleUrl: './app-8444102933261591.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8444102933261591Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
