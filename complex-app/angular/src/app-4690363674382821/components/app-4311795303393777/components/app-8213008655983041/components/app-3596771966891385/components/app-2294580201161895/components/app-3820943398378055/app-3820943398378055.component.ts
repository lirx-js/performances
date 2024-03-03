import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3820943398378055',
  standalone: true,
  templateUrl: './app-3820943398378055.component.html',
  styleUrl: './app-3820943398378055.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3820943398378055Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
