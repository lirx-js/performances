import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5559626457484499',
  standalone: true,
  templateUrl: './app-5559626457484499.component.html',
  styleUrl: './app-5559626457484499.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5559626457484499Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
