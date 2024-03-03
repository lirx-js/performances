import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5360394825213',
  standalone: true,
  templateUrl: './app-5360394825213.component.html',
  styleUrl: './app-5360394825213.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5360394825213Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
