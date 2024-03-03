import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-354556455160411',
  standalone: true,
  templateUrl: './app-354556455160411.component.html',
  styleUrl: './app-354556455160411.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App354556455160411Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
