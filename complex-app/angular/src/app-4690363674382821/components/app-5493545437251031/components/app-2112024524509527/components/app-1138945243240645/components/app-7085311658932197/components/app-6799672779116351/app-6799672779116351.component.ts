import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6799672779116351',
  standalone: true,
  templateUrl: './app-6799672779116351.component.html',
  styleUrl: './app-6799672779116351.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6799672779116351Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
