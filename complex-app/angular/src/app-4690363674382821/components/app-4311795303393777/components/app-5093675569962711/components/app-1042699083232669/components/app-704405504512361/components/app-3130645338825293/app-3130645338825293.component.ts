import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3130645338825293',
  standalone: true,
  templateUrl: './app-3130645338825293.component.html',
  styleUrl: './app-3130645338825293.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3130645338825293Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
