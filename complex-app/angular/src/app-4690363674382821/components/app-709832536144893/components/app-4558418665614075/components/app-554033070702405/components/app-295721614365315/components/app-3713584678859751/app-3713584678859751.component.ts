import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3713584678859751',
  standalone: true,
  templateUrl: './app-3713584678859751.component.html',
  styleUrl: './app-3713584678859751.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3713584678859751Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
