import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-157963200218033',
  standalone: true,
  templateUrl: './app-157963200218033.component.html',
  styleUrl: './app-157963200218033.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App157963200218033Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
