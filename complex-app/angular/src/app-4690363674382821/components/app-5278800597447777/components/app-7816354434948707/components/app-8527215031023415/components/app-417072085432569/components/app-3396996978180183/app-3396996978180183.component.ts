import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3396996978180183',
  standalone: true,
  templateUrl: './app-3396996978180183.component.html',
  styleUrl: './app-3396996978180183.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3396996978180183Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
