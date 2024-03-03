import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6506494762913899',
  standalone: true,
  templateUrl: './app-6506494762913899.component.html',
  styleUrl: './app-6506494762913899.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6506494762913899Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
