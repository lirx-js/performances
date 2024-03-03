import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-132674941494961',
  standalone: true,
  templateUrl: './app-132674941494961.component.html',
  styleUrl: './app-132674941494961.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App132674941494961Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
