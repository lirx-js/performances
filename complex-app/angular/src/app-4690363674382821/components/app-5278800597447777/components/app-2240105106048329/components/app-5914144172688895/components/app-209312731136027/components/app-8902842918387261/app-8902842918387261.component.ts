import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8902842918387261',
  standalone: true,
  templateUrl: './app-8902842918387261.component.html',
  styleUrl: './app-8902842918387261.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8902842918387261Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
