import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2735753884863513',
  standalone: true,
  templateUrl: './app-2735753884863513.component.html',
  styleUrl: './app-2735753884863513.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2735753884863513Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
