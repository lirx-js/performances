import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-122386232166837',
  standalone: true,
  templateUrl: './app-122386232166837.component.html',
  styleUrl: './app-122386232166837.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App122386232166837Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
