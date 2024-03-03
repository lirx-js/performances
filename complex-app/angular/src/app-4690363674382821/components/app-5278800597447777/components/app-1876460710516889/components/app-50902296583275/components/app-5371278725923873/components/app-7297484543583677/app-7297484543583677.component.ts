import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7297484543583677',
  standalone: true,
  templateUrl: './app-7297484543583677.component.html',
  styleUrl: './app-7297484543583677.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7297484543583677Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
