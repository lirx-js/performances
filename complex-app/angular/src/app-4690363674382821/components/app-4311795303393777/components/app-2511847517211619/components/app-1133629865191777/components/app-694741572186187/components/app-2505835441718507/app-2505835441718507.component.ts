import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2505835441718507',
  standalone: true,
  templateUrl: './app-2505835441718507.component.html',
  styleUrl: './app-2505835441718507.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2505835441718507Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
