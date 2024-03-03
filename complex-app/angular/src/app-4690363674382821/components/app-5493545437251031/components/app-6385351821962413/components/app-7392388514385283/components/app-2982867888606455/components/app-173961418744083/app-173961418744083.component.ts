import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-173961418744083',
  standalone: true,
  templateUrl: './app-173961418744083.component.html',
  styleUrl: './app-173961418744083.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App173961418744083Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
