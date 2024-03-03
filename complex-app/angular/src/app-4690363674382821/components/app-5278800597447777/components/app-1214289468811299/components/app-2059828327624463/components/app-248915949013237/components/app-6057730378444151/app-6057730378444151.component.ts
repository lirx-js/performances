import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6057730378444151',
  standalone: true,
  templateUrl: './app-6057730378444151.component.html',
  styleUrl: './app-6057730378444151.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6057730378444151Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
