import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5562985110870305',
  standalone: true,
  templateUrl: './app-5562985110870305.component.html',
  styleUrl: './app-5562985110870305.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5562985110870305Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
