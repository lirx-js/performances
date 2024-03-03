import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8368814162158899',
  standalone: true,
  templateUrl: './app-8368814162158899.component.html',
  styleUrl: './app-8368814162158899.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8368814162158899Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
