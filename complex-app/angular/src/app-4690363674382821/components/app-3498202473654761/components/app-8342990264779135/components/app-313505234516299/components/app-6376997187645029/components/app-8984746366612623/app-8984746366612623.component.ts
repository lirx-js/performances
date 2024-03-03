import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8984746366612623',
  standalone: true,
  templateUrl: './app-8984746366612623.component.html',
  styleUrl: './app-8984746366612623.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8984746366612623Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
