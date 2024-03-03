import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7572015886637155',
  standalone: true,
  templateUrl: './app-7572015886637155.component.html',
  styleUrl: './app-7572015886637155.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7572015886637155Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
