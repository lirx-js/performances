import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7111692653881661',
  standalone: true,
  templateUrl: './app-7111692653881661.component.html',
  styleUrl: './app-7111692653881661.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7111692653881661Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
