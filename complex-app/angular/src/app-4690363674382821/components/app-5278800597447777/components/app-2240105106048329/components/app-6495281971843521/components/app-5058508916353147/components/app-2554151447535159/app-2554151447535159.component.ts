import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2554151447535159',
  standalone: true,
  templateUrl: './app-2554151447535159.component.html',
  styleUrl: './app-2554151447535159.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2554151447535159Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
