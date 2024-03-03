import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8208512012748025',
  standalone: true,
  templateUrl: './app-8208512012748025.component.html',
  styleUrl: './app-8208512012748025.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8208512012748025Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
