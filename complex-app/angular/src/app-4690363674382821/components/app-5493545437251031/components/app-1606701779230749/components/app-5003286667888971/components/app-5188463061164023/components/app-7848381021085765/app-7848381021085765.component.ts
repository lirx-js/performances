import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7848381021085765',
  standalone: true,
  templateUrl: './app-7848381021085765.component.html',
  styleUrl: './app-7848381021085765.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7848381021085765Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
