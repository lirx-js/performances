import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7554249601426291',
  standalone: true,
  templateUrl: './app-7554249601426291.component.html',
  styleUrl: './app-7554249601426291.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7554249601426291Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
