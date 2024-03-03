import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6833085702469767',
  standalone: true,
  templateUrl: './app-6833085702469767.component.html',
  styleUrl: './app-6833085702469767.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6833085702469767Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
