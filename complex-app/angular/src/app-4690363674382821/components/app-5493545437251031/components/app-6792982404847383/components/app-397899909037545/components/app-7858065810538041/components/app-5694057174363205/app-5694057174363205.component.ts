import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5694057174363205',
  standalone: true,
  templateUrl: './app-5694057174363205.component.html',
  styleUrl: './app-5694057174363205.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5694057174363205Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
