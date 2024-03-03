import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7131053561059367',
  standalone: true,
  templateUrl: './app-7131053561059367.component.html',
  styleUrl: './app-7131053561059367.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7131053561059367Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
