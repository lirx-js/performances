import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5344275980571671',
  standalone: true,
  templateUrl: './app-5344275980571671.component.html',
  styleUrl: './app-5344275980571671.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5344275980571671Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
