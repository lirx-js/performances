import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7459282186892311',
  standalone: true,
  templateUrl: './app-7459282186892311.component.html',
  styleUrl: './app-7459282186892311.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7459282186892311Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
