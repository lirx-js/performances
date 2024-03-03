import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7632956786513773',
  standalone: true,
  templateUrl: './app-7632956786513773.component.html',
  styleUrl: './app-7632956786513773.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7632956786513773Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
