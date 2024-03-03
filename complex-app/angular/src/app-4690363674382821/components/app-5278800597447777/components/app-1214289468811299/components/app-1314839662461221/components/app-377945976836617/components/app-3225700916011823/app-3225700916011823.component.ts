import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3225700916011823',
  standalone: true,
  templateUrl: './app-3225700916011823.component.html',
  styleUrl: './app-3225700916011823.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3225700916011823Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
