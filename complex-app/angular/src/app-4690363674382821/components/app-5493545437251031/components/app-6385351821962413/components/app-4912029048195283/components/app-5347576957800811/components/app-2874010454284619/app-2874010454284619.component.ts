import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2874010454284619',
  standalone: true,
  templateUrl: './app-2874010454284619.component.html',
  styleUrl: './app-2874010454284619.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2874010454284619Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
