import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5200351991459359',
  standalone: true,
  templateUrl: './app-5200351991459359.component.html',
  styleUrl: './app-5200351991459359.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5200351991459359Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
