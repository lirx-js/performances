import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-608095997284379',
  standalone: true,
  templateUrl: './app-608095997284379.component.html',
  styleUrl: './app-608095997284379.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App608095997284379Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
