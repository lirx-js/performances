import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8900492645246747',
  standalone: true,
  templateUrl: './app-8900492645246747.component.html',
  styleUrl: './app-8900492645246747.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8900492645246747Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
