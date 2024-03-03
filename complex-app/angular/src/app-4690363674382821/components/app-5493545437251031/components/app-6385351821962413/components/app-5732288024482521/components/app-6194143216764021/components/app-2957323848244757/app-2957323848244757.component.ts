import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2957323848244757',
  standalone: true,
  templateUrl: './app-2957323848244757.component.html',
  styleUrl: './app-2957323848244757.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2957323848244757Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
