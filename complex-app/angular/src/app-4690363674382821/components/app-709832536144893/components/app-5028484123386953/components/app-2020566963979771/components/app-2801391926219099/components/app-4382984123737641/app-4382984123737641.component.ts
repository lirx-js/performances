import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4382984123737641',
  standalone: true,
  templateUrl: './app-4382984123737641.component.html',
  styleUrl: './app-4382984123737641.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4382984123737641Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
