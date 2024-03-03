import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8661438329174965',
  standalone: true,
  templateUrl: './app-8661438329174965.component.html',
  styleUrl: './app-8661438329174965.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8661438329174965Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
