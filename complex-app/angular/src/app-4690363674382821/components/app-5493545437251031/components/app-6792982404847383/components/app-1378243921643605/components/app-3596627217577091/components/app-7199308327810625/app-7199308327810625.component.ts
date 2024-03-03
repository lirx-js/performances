import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7199308327810625',
  standalone: true,
  templateUrl: './app-7199308327810625.component.html',
  styleUrl: './app-7199308327810625.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7199308327810625Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
