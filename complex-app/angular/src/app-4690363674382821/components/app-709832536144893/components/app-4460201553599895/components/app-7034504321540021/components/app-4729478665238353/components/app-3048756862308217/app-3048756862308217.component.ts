import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3048756862308217',
  standalone: true,
  templateUrl: './app-3048756862308217.component.html',
  styleUrl: './app-3048756862308217.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3048756862308217Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
