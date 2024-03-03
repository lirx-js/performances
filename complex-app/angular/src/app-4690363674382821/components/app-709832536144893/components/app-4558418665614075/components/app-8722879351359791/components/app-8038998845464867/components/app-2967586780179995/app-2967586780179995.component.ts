import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2967586780179995',
  standalone: true,
  templateUrl: './app-2967586780179995.component.html',
  styleUrl: './app-2967586780179995.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2967586780179995Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
