import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7329870940182527',
  standalone: true,
  templateUrl: './app-7329870940182527.component.html',
  styleUrl: './app-7329870940182527.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7329870940182527Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
