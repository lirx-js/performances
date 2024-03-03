import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7562255658029539',
  standalone: true,
  templateUrl: './app-7562255658029539.component.html',
  styleUrl: './app-7562255658029539.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7562255658029539Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
