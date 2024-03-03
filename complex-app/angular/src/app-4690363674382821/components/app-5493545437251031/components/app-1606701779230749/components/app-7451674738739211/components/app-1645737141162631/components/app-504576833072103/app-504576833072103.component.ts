import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-504576833072103',
  standalone: true,
  templateUrl: './app-504576833072103.component.html',
  styleUrl: './app-504576833072103.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App504576833072103Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
