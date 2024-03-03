import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7854988535396239',
  standalone: true,
  templateUrl: './app-7854988535396239.component.html',
  styleUrl: './app-7854988535396239.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7854988535396239Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
