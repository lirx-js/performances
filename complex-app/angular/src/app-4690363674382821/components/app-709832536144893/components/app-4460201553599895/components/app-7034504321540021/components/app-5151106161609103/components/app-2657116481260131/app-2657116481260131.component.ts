import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2657116481260131',
  standalone: true,
  templateUrl: './app-2657116481260131.component.html',
  styleUrl: './app-2657116481260131.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2657116481260131Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
