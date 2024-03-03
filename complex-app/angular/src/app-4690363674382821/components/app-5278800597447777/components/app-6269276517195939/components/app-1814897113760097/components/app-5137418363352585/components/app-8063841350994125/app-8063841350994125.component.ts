import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8063841350994125',
  standalone: true,
  templateUrl: './app-8063841350994125.component.html',
  styleUrl: './app-8063841350994125.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8063841350994125Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
