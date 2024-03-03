import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5379347450325017',
  standalone: true,
  templateUrl: './app-5379347450325017.component.html',
  styleUrl: './app-5379347450325017.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5379347450325017Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
