import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8786920085934711',
  standalone: true,
  templateUrl: './app-8786920085934711.component.html',
  styleUrl: './app-8786920085934711.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8786920085934711Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
