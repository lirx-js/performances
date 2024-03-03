import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8873498500472009',
  standalone: true,
  templateUrl: './app-8873498500472009.component.html',
  styleUrl: './app-8873498500472009.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8873498500472009Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
