import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-312924586168395',
  standalone: true,
  templateUrl: './app-312924586168395.component.html',
  styleUrl: './app-312924586168395.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App312924586168395Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
