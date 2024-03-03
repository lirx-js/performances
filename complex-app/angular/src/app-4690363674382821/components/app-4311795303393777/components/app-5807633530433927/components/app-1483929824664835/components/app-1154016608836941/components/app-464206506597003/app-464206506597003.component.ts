import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-464206506597003',
  standalone: true,
  templateUrl: './app-464206506597003.component.html',
  styleUrl: './app-464206506597003.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App464206506597003Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
