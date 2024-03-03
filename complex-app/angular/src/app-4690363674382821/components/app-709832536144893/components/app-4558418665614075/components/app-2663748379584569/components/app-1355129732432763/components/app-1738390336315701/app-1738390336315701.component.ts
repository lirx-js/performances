import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1738390336315701',
  standalone: true,
  templateUrl: './app-1738390336315701.component.html',
  styleUrl: './app-1738390336315701.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1738390336315701Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
