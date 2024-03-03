import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3216522459697271',
  standalone: true,
  templateUrl: './app-3216522459697271.component.html',
  styleUrl: './app-3216522459697271.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3216522459697271Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
