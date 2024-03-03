import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2024160773340779',
  standalone: true,
  templateUrl: './app-2024160773340779.component.html',
  styleUrl: './app-2024160773340779.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2024160773340779Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
