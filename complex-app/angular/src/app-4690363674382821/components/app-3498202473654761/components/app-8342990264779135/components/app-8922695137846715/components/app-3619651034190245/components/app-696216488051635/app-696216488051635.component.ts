import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-696216488051635',
  standalone: true,
  templateUrl: './app-696216488051635.component.html',
  styleUrl: './app-696216488051635.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App696216488051635Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
