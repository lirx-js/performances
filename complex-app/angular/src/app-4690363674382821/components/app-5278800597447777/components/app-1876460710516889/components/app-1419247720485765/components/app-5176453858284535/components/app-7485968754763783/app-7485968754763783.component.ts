import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7485968754763783',
  standalone: true,
  templateUrl: './app-7485968754763783.component.html',
  styleUrl: './app-7485968754763783.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7485968754763783Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
