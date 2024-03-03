import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3217647119331751',
  standalone: true,
  templateUrl: './app-3217647119331751.component.html',
  styleUrl: './app-3217647119331751.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3217647119331751Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
