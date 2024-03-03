import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2231510285153409',
  standalone: true,
  templateUrl: './app-2231510285153409.component.html',
  styleUrl: './app-2231510285153409.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2231510285153409Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
