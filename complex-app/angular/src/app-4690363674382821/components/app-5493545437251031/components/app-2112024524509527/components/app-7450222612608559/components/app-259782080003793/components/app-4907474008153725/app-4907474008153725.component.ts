import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4907474008153725',
  standalone: true,
  templateUrl: './app-4907474008153725.component.html',
  styleUrl: './app-4907474008153725.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4907474008153725Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
