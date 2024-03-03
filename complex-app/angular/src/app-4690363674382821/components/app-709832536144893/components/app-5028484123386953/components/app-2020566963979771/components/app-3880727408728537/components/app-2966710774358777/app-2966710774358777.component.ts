import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2966710774358777',
  standalone: true,
  templateUrl: './app-2966710774358777.component.html',
  styleUrl: './app-2966710774358777.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2966710774358777Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
