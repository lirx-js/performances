import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-204446300830171',
  standalone: true,
  templateUrl: './app-204446300830171.component.html',
  styleUrl: './app-204446300830171.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App204446300830171Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
