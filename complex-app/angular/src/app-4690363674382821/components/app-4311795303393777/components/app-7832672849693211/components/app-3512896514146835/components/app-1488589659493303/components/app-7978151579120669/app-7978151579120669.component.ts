import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7978151579120669',
  standalone: true,
  templateUrl: './app-7978151579120669.component.html',
  styleUrl: './app-7978151579120669.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7978151579120669Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
