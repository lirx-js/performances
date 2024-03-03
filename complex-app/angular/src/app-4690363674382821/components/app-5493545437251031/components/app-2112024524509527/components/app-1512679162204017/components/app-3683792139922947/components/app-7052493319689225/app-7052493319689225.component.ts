import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7052493319689225',
  standalone: true,
  templateUrl: './app-7052493319689225.component.html',
  styleUrl: './app-7052493319689225.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7052493319689225Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
