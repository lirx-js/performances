import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2227239747347669',
  standalone: true,
  templateUrl: './app-2227239747347669.component.html',
  styleUrl: './app-2227239747347669.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2227239747347669Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
