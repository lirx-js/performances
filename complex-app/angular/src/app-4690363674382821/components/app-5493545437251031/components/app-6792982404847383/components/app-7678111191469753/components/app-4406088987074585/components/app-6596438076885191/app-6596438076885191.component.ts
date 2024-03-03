import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6596438076885191',
  standalone: true,
  templateUrl: './app-6596438076885191.component.html',
  styleUrl: './app-6596438076885191.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6596438076885191Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
