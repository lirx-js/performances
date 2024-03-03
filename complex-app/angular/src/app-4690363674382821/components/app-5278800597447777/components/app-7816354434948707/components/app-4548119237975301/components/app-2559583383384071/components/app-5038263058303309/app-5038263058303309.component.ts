import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5038263058303309',
  standalone: true,
  templateUrl: './app-5038263058303309.component.html',
  styleUrl: './app-5038263058303309.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5038263058303309Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
