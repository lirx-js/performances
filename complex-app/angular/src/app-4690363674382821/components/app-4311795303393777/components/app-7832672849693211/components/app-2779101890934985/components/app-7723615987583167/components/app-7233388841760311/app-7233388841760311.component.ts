import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7233388841760311',
  standalone: true,
  templateUrl: './app-7233388841760311.component.html',
  styleUrl: './app-7233388841760311.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7233388841760311Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
