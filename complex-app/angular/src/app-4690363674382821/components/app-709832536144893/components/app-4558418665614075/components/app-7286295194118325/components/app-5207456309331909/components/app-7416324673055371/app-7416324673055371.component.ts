import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7416324673055371',
  standalone: true,
  templateUrl: './app-7416324673055371.component.html',
  styleUrl: './app-7416324673055371.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7416324673055371Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
