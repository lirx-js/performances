import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7609914991707955',
  standalone: true,
  templateUrl: './app-7609914991707955.component.html',
  styleUrl: './app-7609914991707955.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7609914991707955Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
