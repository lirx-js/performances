import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1704601608738667',
  standalone: true,
  templateUrl: './app-1704601608738667.component.html',
  styleUrl: './app-1704601608738667.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1704601608738667Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
