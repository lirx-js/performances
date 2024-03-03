import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7091822744635153',
  standalone: true,
  templateUrl: './app-7091822744635153.component.html',
  styleUrl: './app-7091822744635153.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7091822744635153Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
