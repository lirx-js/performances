import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2587155503566829',
  standalone: true,
  templateUrl: './app-2587155503566829.component.html',
  styleUrl: './app-2587155503566829.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2587155503566829Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
