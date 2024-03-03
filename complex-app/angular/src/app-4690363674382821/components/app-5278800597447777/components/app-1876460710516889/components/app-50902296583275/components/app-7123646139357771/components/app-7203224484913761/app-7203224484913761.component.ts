import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7203224484913761',
  standalone: true,
  templateUrl: './app-7203224484913761.component.html',
  styleUrl: './app-7203224484913761.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7203224484913761Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
