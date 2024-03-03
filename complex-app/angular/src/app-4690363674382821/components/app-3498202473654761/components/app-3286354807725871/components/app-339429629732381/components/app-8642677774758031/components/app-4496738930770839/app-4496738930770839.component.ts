import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4496738930770839',
  standalone: true,
  templateUrl: './app-4496738930770839.component.html',
  styleUrl: './app-4496738930770839.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4496738930770839Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
