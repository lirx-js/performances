import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3790783272176485',
  standalone: true,
  templateUrl: './app-3790783272176485.component.html',
  styleUrl: './app-3790783272176485.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3790783272176485Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
