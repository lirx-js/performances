import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4282240375173335',
  standalone: true,
  templateUrl: './app-4282240375173335.component.html',
  styleUrl: './app-4282240375173335.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4282240375173335Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
