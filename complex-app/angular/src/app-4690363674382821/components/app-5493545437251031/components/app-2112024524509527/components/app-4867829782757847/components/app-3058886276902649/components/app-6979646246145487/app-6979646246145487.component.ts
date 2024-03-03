import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6979646246145487',
  standalone: true,
  templateUrl: './app-6979646246145487.component.html',
  styleUrl: './app-6979646246145487.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6979646246145487Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
