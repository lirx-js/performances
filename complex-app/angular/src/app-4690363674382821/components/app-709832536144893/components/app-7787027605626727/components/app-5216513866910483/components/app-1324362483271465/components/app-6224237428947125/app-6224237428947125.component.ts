import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6224237428947125',
  standalone: true,
  templateUrl: './app-6224237428947125.component.html',
  styleUrl: './app-6224237428947125.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6224237428947125Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
