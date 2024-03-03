import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8070438970300349',
  standalone: true,
  templateUrl: './app-8070438970300349.component.html',
  styleUrl: './app-8070438970300349.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8070438970300349Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
