import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-759861187643837',
  standalone: true,
  templateUrl: './app-759861187643837.component.html',
  styleUrl: './app-759861187643837.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App759861187643837Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
