import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5488184441519803',
  standalone: true,
  templateUrl: './app-5488184441519803.component.html',
  styleUrl: './app-5488184441519803.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5488184441519803Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
