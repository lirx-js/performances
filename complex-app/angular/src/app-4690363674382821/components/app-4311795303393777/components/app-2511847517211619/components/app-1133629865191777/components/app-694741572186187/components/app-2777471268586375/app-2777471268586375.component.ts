import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2777471268586375',
  standalone: true,
  templateUrl: './app-2777471268586375.component.html',
  styleUrl: './app-2777471268586375.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2777471268586375Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
