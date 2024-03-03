import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2227857032677303',
  standalone: true,
  templateUrl: './app-2227857032677303.component.html',
  styleUrl: './app-2227857032677303.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2227857032677303Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
