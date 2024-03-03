import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7328240364758583',
  standalone: true,
  templateUrl: './app-7328240364758583.component.html',
  styleUrl: './app-7328240364758583.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7328240364758583Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
