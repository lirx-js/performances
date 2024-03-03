import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4208144300994779',
  standalone: true,
  templateUrl: './app-4208144300994779.component.html',
  styleUrl: './app-4208144300994779.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4208144300994779Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
