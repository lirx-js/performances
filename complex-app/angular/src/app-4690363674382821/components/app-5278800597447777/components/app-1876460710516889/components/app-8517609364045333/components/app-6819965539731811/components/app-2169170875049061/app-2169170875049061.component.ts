import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2169170875049061',
  standalone: true,
  templateUrl: './app-2169170875049061.component.html',
  styleUrl: './app-2169170875049061.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2169170875049061Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
