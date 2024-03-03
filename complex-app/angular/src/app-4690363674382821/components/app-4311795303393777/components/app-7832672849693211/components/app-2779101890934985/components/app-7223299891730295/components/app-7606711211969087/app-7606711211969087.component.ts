import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7606711211969087',
  standalone: true,
  templateUrl: './app-7606711211969087.component.html',
  styleUrl: './app-7606711211969087.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7606711211969087Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
