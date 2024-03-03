import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1718264174457405',
  standalone: true,
  templateUrl: './app-1718264174457405.component.html',
  styleUrl: './app-1718264174457405.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1718264174457405Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
