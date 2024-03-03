import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1599045553835231',
  standalone: true,
  templateUrl: './app-1599045553835231.component.html',
  styleUrl: './app-1599045553835231.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1599045553835231Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
