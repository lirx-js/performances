import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3634674413705633',
  standalone: true,
  templateUrl: './app-3634674413705633.component.html',
  styleUrl: './app-3634674413705633.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3634674413705633Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
