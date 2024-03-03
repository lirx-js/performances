import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5783445664264629',
  standalone: true,
  templateUrl: './app-5783445664264629.component.html',
  styleUrl: './app-5783445664264629.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5783445664264629Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
