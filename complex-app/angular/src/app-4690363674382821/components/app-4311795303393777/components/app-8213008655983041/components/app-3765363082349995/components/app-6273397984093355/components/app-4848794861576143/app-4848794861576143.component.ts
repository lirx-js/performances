import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4848794861576143',
  standalone: true,
  templateUrl: './app-4848794861576143.component.html',
  styleUrl: './app-4848794861576143.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4848794861576143Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
