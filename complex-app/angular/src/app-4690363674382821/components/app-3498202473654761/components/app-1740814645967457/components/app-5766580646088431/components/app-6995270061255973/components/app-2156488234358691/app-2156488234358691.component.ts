import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2156488234358691',
  standalone: true,
  templateUrl: './app-2156488234358691.component.html',
  styleUrl: './app-2156488234358691.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2156488234358691Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
