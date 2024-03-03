import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3812967518699657',
  standalone: true,
  templateUrl: './app-3812967518699657.component.html',
  styleUrl: './app-3812967518699657.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3812967518699657Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
