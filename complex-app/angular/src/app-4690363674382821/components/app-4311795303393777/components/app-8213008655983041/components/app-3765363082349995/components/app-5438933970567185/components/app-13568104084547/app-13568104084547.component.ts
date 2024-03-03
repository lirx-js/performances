import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-13568104084547',
  standalone: true,
  templateUrl: './app-13568104084547.component.html',
  styleUrl: './app-13568104084547.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App13568104084547Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
