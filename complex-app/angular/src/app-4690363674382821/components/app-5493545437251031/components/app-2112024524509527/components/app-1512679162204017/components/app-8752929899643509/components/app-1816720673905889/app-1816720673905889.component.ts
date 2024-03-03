import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1816720673905889',
  standalone: true,
  templateUrl: './app-1816720673905889.component.html',
  styleUrl: './app-1816720673905889.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1816720673905889Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
