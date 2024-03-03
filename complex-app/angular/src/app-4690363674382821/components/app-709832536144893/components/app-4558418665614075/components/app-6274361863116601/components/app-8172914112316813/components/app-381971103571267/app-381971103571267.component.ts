import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-381971103571267',
  standalone: true,
  templateUrl: './app-381971103571267.component.html',
  styleUrl: './app-381971103571267.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App381971103571267Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
