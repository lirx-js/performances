import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2747105582625461',
  standalone: true,
  templateUrl: './app-2747105582625461.component.html',
  styleUrl: './app-2747105582625461.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2747105582625461Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
