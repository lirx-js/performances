import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7179359513088771',
  standalone: true,
  templateUrl: './app-7179359513088771.component.html',
  styleUrl: './app-7179359513088771.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7179359513088771Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
