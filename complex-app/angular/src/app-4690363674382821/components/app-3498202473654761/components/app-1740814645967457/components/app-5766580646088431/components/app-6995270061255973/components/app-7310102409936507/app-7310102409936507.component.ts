import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7310102409936507',
  standalone: true,
  templateUrl: './app-7310102409936507.component.html',
  styleUrl: './app-7310102409936507.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7310102409936507Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
