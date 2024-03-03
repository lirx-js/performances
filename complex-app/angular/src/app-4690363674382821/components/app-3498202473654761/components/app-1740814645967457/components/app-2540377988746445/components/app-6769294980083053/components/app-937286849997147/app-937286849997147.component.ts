import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-937286849997147',
  standalone: true,
  templateUrl: './app-937286849997147.component.html',
  styleUrl: './app-937286849997147.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App937286849997147Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
