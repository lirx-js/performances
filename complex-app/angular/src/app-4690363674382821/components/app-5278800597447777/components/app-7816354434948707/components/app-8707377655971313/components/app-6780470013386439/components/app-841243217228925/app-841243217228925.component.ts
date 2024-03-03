import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-841243217228925',
  standalone: true,
  templateUrl: './app-841243217228925.component.html',
  styleUrl: './app-841243217228925.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App841243217228925Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
