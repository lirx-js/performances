import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2445152045358989',
  standalone: true,
  templateUrl: './app-2445152045358989.component.html',
  styleUrl: './app-2445152045358989.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2445152045358989Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
