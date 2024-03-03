import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1420081048534041',
  standalone: true,
  templateUrl: './app-1420081048534041.component.html',
  styleUrl: './app-1420081048534041.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1420081048534041Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
