import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1749482330093521',
  standalone: true,
  templateUrl: './app-1749482330093521.component.html',
  styleUrl: './app-1749482330093521.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1749482330093521Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
