import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2636472013573747',
  standalone: true,
  templateUrl: './app-2636472013573747.component.html',
  styleUrl: './app-2636472013573747.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2636472013573747Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
