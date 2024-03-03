import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2594970649502699',
  standalone: true,
  templateUrl: './app-2594970649502699.component.html',
  styleUrl: './app-2594970649502699.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2594970649502699Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
