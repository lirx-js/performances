import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3371331923518301',
  standalone: true,
  templateUrl: './app-3371331923518301.component.html',
  styleUrl: './app-3371331923518301.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3371331923518301Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
