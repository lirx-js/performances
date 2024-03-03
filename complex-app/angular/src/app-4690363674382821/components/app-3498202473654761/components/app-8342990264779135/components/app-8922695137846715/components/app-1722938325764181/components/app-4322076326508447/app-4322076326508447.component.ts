import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4322076326508447',
  standalone: true,
  templateUrl: './app-4322076326508447.component.html',
  styleUrl: './app-4322076326508447.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4322076326508447Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
