import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7381312922918131',
  standalone: true,
  templateUrl: './app-7381312922918131.component.html',
  styleUrl: './app-7381312922918131.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7381312922918131Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
