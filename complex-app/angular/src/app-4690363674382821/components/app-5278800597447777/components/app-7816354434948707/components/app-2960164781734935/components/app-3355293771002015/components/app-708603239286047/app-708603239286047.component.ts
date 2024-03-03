import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-708603239286047',
  standalone: true,
  templateUrl: './app-708603239286047.component.html',
  styleUrl: './app-708603239286047.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App708603239286047Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
