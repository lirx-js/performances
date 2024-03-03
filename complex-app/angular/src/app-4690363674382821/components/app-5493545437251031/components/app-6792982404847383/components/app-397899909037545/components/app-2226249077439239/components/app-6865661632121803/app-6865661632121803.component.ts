import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6865661632121803',
  standalone: true,
  templateUrl: './app-6865661632121803.component.html',
  styleUrl: './app-6865661632121803.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6865661632121803Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
