import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6489652224662993',
  standalone: true,
  templateUrl: './app-6489652224662993.component.html',
  styleUrl: './app-6489652224662993.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6489652224662993Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
