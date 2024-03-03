import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3930738928224171',
  standalone: true,
  templateUrl: './app-3930738928224171.component.html',
  styleUrl: './app-3930738928224171.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3930738928224171Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
