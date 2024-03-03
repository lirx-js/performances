import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7425948981493523',
  standalone: true,
  templateUrl: './app-7425948981493523.component.html',
  styleUrl: './app-7425948981493523.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7425948981493523Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
