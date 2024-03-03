import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5807999479829847',
  standalone: true,
  templateUrl: './app-5807999479829847.component.html',
  styleUrl: './app-5807999479829847.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5807999479829847Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
