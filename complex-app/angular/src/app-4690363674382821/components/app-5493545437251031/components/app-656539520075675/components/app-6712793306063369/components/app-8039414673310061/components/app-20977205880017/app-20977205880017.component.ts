import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-20977205880017',
  standalone: true,
  templateUrl: './app-20977205880017.component.html',
  styleUrl: './app-20977205880017.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App20977205880017Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
