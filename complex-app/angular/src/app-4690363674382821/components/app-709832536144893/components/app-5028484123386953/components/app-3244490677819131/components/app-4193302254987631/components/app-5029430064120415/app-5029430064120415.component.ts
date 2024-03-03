import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5029430064120415',
  standalone: true,
  templateUrl: './app-5029430064120415.component.html',
  styleUrl: './app-5029430064120415.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5029430064120415Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
