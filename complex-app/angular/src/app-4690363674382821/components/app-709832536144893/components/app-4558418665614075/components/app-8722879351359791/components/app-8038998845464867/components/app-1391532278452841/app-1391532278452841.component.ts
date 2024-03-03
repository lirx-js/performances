import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1391532278452841',
  standalone: true,
  templateUrl: './app-1391532278452841.component.html',
  styleUrl: './app-1391532278452841.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1391532278452841Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
