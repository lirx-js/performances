import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1286028986240949',
  standalone: true,
  templateUrl: './app-1286028986240949.component.html',
  styleUrl: './app-1286028986240949.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1286028986240949Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
