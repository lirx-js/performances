import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2668999571425635',
  standalone: true,
  templateUrl: './app-2668999571425635.component.html',
  styleUrl: './app-2668999571425635.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2668999571425635Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
