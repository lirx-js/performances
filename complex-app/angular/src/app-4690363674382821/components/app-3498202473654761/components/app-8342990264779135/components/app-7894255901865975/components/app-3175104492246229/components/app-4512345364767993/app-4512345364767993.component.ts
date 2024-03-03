import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4512345364767993',
  standalone: true,
  templateUrl: './app-4512345364767993.component.html',
  styleUrl: './app-4512345364767993.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4512345364767993Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
