import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3557765835685101',
  standalone: true,
  templateUrl: './app-3557765835685101.component.html',
  styleUrl: './app-3557765835685101.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3557765835685101Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
