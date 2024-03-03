import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-455674300010381',
  standalone: true,
  templateUrl: './app-455674300010381.component.html',
  styleUrl: './app-455674300010381.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App455674300010381Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
