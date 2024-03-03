import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-939090903936809',
  standalone: true,
  templateUrl: './app-939090903936809.component.html',
  styleUrl: './app-939090903936809.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App939090903936809Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
