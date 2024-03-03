import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7924561145218171',
  standalone: true,
  templateUrl: './app-7924561145218171.component.html',
  styleUrl: './app-7924561145218171.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7924561145218171Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
