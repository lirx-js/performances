import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-389311536048799',
  standalone: true,
  templateUrl: './app-389311536048799.component.html',
  styleUrl: './app-389311536048799.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App389311536048799Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
