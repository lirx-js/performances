import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-816074954093021',
  standalone: true,
  templateUrl: './app-816074954093021.component.html',
  styleUrl: './app-816074954093021.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App816074954093021Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
