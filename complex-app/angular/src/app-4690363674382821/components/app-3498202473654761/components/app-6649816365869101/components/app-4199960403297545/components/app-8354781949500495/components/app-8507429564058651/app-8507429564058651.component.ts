import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8507429564058651',
  standalone: true,
  templateUrl: './app-8507429564058651.component.html',
  styleUrl: './app-8507429564058651.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8507429564058651Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
