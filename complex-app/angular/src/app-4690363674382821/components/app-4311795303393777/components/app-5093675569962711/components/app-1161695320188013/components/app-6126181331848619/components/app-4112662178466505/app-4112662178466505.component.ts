import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4112662178466505',
  standalone: true,
  templateUrl: './app-4112662178466505.component.html',
  styleUrl: './app-4112662178466505.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4112662178466505Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
