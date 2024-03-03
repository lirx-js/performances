import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5429735902193143',
  standalone: true,
  templateUrl: './app-5429735902193143.component.html',
  styleUrl: './app-5429735902193143.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5429735902193143Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
