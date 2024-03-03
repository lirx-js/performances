import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7848332960608453',
  standalone: true,
  templateUrl: './app-7848332960608453.component.html',
  styleUrl: './app-7848332960608453.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7848332960608453Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
