import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2564604578669847',
  standalone: true,
  templateUrl: './app-2564604578669847.component.html',
  styleUrl: './app-2564604578669847.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2564604578669847Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
