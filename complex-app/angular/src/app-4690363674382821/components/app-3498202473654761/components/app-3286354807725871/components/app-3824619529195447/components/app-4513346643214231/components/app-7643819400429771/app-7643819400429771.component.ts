import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7643819400429771',
  standalone: true,
  templateUrl: './app-7643819400429771.component.html',
  styleUrl: './app-7643819400429771.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7643819400429771Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
