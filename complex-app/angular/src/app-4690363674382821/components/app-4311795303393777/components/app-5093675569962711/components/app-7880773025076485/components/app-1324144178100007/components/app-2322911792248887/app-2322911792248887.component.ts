import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2322911792248887',
  standalone: true,
  templateUrl: './app-2322911792248887.component.html',
  styleUrl: './app-2322911792248887.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2322911792248887Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
