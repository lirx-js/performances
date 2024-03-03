import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7523377934536049',
  standalone: true,
  templateUrl: './app-7523377934536049.component.html',
  styleUrl: './app-7523377934536049.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7523377934536049Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
