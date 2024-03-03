import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4416272159087239',
  standalone: true,
  templateUrl: './app-4416272159087239.component.html',
  styleUrl: './app-4416272159087239.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4416272159087239Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
