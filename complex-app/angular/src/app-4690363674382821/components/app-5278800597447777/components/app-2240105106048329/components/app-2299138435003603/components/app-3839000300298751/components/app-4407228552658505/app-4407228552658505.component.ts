import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4407228552658505',
  standalone: true,
  templateUrl: './app-4407228552658505.component.html',
  styleUrl: './app-4407228552658505.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4407228552658505Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
