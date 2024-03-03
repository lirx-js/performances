import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8689060643838131',
  standalone: true,
  templateUrl: './app-8689060643838131.component.html',
  styleUrl: './app-8689060643838131.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8689060643838131Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
