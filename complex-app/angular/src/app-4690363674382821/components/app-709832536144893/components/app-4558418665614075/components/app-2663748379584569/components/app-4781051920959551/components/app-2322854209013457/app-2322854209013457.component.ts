import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2322854209013457',
  standalone: true,
  templateUrl: './app-2322854209013457.component.html',
  styleUrl: './app-2322854209013457.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2322854209013457Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
