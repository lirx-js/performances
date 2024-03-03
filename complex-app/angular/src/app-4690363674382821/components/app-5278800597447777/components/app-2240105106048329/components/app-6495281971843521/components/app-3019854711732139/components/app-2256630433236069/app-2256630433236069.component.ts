import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2256630433236069',
  standalone: true,
  templateUrl: './app-2256630433236069.component.html',
  styleUrl: './app-2256630433236069.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2256630433236069Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
