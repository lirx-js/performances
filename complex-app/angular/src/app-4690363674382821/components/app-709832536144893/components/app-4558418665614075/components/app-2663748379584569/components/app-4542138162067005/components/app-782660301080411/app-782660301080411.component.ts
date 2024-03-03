import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-782660301080411',
  standalone: true,
  templateUrl: './app-782660301080411.component.html',
  styleUrl: './app-782660301080411.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App782660301080411Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
