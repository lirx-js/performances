import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5572290020864147',
  standalone: true,
  templateUrl: './app-5572290020864147.component.html',
  styleUrl: './app-5572290020864147.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5572290020864147Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
