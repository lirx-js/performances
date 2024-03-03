import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8831320578357597',
  standalone: true,
  templateUrl: './app-8831320578357597.component.html',
  styleUrl: './app-8831320578357597.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8831320578357597Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
