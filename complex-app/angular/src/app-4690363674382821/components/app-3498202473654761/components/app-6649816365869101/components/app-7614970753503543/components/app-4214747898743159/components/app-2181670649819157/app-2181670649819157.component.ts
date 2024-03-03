import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2181670649819157',
  standalone: true,
  templateUrl: './app-2181670649819157.component.html',
  styleUrl: './app-2181670649819157.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2181670649819157Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
