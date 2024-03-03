import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2637745090682121',
  standalone: true,
  templateUrl: './app-2637745090682121.component.html',
  styleUrl: './app-2637745090682121.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2637745090682121Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
