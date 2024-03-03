import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-465263755159635',
  standalone: true,
  templateUrl: './app-465263755159635.component.html',
  styleUrl: './app-465263755159635.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App465263755159635Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
