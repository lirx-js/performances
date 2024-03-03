import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6221678120305295',
  standalone: true,
  templateUrl: './app-6221678120305295.component.html',
  styleUrl: './app-6221678120305295.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6221678120305295Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
