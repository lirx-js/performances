import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6691804444047577',
  standalone: true,
  templateUrl: './app-6691804444047577.component.html',
  styleUrl: './app-6691804444047577.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6691804444047577Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
