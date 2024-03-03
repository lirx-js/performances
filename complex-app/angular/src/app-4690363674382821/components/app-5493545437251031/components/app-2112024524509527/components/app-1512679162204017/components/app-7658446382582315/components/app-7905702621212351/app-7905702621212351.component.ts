import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7905702621212351',
  standalone: true,
  templateUrl: './app-7905702621212351.component.html',
  styleUrl: './app-7905702621212351.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7905702621212351Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
