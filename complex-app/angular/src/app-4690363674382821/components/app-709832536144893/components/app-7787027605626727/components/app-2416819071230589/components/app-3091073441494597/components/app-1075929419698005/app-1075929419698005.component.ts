import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1075929419698005',
  standalone: true,
  templateUrl: './app-1075929419698005.component.html',
  styleUrl: './app-1075929419698005.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1075929419698005Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
