import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1976233762076537',
  standalone: true,
  templateUrl: './app-1976233762076537.component.html',
  styleUrl: './app-1976233762076537.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1976233762076537Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
