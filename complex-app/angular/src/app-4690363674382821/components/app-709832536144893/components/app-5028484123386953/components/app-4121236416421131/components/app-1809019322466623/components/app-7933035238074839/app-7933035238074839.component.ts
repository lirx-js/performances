import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7933035238074839',
  standalone: true,
  templateUrl: './app-7933035238074839.component.html',
  styleUrl: './app-7933035238074839.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7933035238074839Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
