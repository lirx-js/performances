import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5471650326462469',
  standalone: true,
  templateUrl: './app-5471650326462469.component.html',
  styleUrl: './app-5471650326462469.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5471650326462469Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
