import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2837298159211993',
  standalone: true,
  templateUrl: './app-2837298159211993.component.html',
  styleUrl: './app-2837298159211993.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2837298159211993Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
