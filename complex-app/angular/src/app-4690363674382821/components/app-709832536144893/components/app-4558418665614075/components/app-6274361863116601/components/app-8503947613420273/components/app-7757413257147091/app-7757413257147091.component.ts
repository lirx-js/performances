import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7757413257147091',
  standalone: true,
  templateUrl: './app-7757413257147091.component.html',
  styleUrl: './app-7757413257147091.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7757413257147091Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
