import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5825274757454717',
  standalone: true,
  templateUrl: './app-5825274757454717.component.html',
  styleUrl: './app-5825274757454717.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5825274757454717Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
