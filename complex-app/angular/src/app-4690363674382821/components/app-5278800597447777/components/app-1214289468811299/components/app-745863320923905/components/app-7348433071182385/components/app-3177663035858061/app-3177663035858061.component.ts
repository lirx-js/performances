import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3177663035858061',
  standalone: true,
  templateUrl: './app-3177663035858061.component.html',
  styleUrl: './app-3177663035858061.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3177663035858061Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
