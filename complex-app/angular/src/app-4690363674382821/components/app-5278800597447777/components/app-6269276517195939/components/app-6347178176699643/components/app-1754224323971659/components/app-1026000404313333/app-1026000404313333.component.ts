import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1026000404313333',
  standalone: true,
  templateUrl: './app-1026000404313333.component.html',
  styleUrl: './app-1026000404313333.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1026000404313333Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
