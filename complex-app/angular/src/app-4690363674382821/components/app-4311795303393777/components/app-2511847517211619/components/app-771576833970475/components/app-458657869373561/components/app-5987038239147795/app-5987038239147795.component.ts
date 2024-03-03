import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5987038239147795',
  standalone: true,
  templateUrl: './app-5987038239147795.component.html',
  styleUrl: './app-5987038239147795.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5987038239147795Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
