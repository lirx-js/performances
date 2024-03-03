import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3869047195706949',
  standalone: true,
  templateUrl: './app-3869047195706949.component.html',
  styleUrl: './app-3869047195706949.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3869047195706949Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
