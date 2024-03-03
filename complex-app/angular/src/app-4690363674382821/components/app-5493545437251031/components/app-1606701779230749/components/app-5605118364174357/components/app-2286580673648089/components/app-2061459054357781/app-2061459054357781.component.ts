import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2061459054357781',
  standalone: true,
  templateUrl: './app-2061459054357781.component.html',
  styleUrl: './app-2061459054357781.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2061459054357781Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
